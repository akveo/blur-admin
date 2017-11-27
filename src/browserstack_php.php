<?php

class HTTP_Request_Helper {

    public static function request($method, $request_url, $data = NULL, $headers = array(), $followRedirected = FALSE)
    {
        $returnValue = FALSE;

        if ($cURL = curl_init()) {

            curl_setopt($cURL, CURLOPT_CUSTOMREQUEST, mb_strtoupper($method));
            curl_setopt($cURL, CURLOPT_HEADER, TRUE);
            curl_setopt($cURL, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($cURL, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
            curl_setopt($cURL, CURLOPT_TIMEOUT, 60);
            curl_setopt($cURL, CURLOPT_CONNECTTIMEOUT, 10);

            if (in_array(mb_strtoupper($method), array('PATCH', 'POST', 'PUT')) && !empty($data)) {
                curl_setopt($cURL, CURLOPT_POSTFIELDS, $data);
            }
            curl_setopt($cURL, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($cURL, CURLOPT_URL, $request_url);
            if ($followRedirected) {
                curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, TRUE);
            } else {
                curl_setopt($cURL, CURLOPT_FOLLOWLOCATION, FALSE);
            }

            if (defined('DISABLE_SSL_SECURITY_FOR_TESTING') && DISABLE_SSL_SECURITY_FOR_TESTING) {
                curl_setopt($cURL, CURLOPT_SSL_VERIFYHOST, 0);
                curl_setopt($cURL, CURLOPT_SSL_VERIFYPEER, FALSE);
            }

            if ($response = curl_exec($cURL)) {

                list($responseHeaders, $responseBody) = explode("\r\n\r\n", $response, 2);
                $returnValue['status'] = curl_getinfo($cURL, CURLINFO_HTTP_CODE);
                $tmpHeaders = explode("\r\n", $responseHeaders);
                $returnValue['headers'] = array();
                foreach ($tmpHeaders  AS $str) {
                    if (!preg_match('/^HTTP\\//u', $str)) {
                        list($Key, $value) = explode(': ', $str, 2);
                        $returnValue['headers'][$Key] = $value;
                    }
                }
                $returnValue['body'] = $responseBody;
            }

            curl_close($cURL);
        }

        return $returnValue;
    }
}

class BrowserStackAPI_Helper
{
    protected $apiRoot = 'https://www.browserstack.com/';

    protected $token = NULL;

    public function setAccessToken($token) {
        $this->token = $token;
    }

    public function get($request_uri, $data = NULL, $headers = array(), $parse_body = TRUE)
    {
        return self::request('GET', $request_uri, $data, $headers, $parse_body);
    }

    private function request($method, $request_uri, $data = NULL, $headers = array(), $parse_body = TRUE)
    {
        if (NULL !== $this->token) {
            $headers[] = 'Authorization: Basic ' . $this->token;
        }

        // Force to JSON for now - ideally this needs to look at the current Output::$outputFormat to ensure returned data is consistent
        $headers[] = 'Accept: application/json';
        return self::makeRequest($method, $request_uri, $data, $headers, $parse_body);
    }

    private function makeRequest($method, $request_uri, $data = NULL, $headers = array(), $parse_body = TRUE)
    {
        $returnValue = FALSE;

        $request_url = $this->apiRoot . ltrim($request_uri, '/');

        $response = HTTP_Request_Helper::request($method, $request_url, $data, $headers);

        if (FALSE !== $response) {
            $returnValue = array();
            $returnValue['status'] = $response['status'];
            $returnValue['headers'] = $response['headers'];
            $returnValue['body'] = json_decode($response['body'], TRUE);
        } else {
            $returnValue = array();
            $returnValue['status'] = 504;
            $returnValue['headers'] = array();
            $returnValue['body'] = '';
        }

        return $returnValue;
    }
}

class BrowserStackClient extends BrowserStackAPI_Helper
{

    public function __construct($username, $password)
    {
        $token = $this->generateToken($username, $password);
        $this->setAccessToken($token);
    }

    public function buildSessions($buildId)
    {
        return $this->get('automate/builds/' . $buildId . '/sessions.json');
    }

    public function builds()
    {
        return $this->get('automate/builds.json');
    }

    private function generateToken($user, $password)
    {
        return base64_encode($user . ':' . $password);
    }
}

$user = 'danneh1';
$password = '5gXqwjkDjBtTiLVmvsLV';
$browserStackClient = new BrowserStackClient($user, $password);

$buildId = '7ecd9b26fd193d25102ef8e45acad32b02127615';

if ($_GET['type'] == 'builds') {
    $response = $browserStackClient->builds();
    if (isset($response['body']) && is_array($response['body'])) {
        echo json_encode(['results' => $response['body']]);
    } else {
        echo json_encode(['errors' => ['No results found for builds.']]);
    }
} else if (isset($_GET['type']) && $_GET['type'] == 'buildSessions' && isset($_GET['buildId'])) {
    $buildId = $_GET['buildId'];
    $response = $browserStackClient->buildSessions($buildId);

    if (isset($response['body']) && is_array($response['body'])) {
        echo json_encode(['results' => $response['body']]);
    } else {
        if (!$buildId) {
            echo json_encode(['errors' => ['GET parameter of buildId is required for buildSessions query.']]);
        } else {
            echo json_encode(['errors' => ['No results found for build sessions.']]);
        }
    }
} else {
    echo json_encode(['errors' => ['GET parameter of builds of buildSessions is required.']]);
}
?>