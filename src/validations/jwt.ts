const jwt = jwt => !!jwt.match(/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/);
export default jwt;
