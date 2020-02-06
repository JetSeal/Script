var body = $response.body;
body = '\/*\n@supported 6CC1A563D79A\n*\/\n' + body;

$done(body);
