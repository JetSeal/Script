var body = $response.body;
body = '\/*\n@supported DEB25A91D974\n*\/\n' + body;

$done(body);
