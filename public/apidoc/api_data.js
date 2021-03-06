define({ "api": [
  {
    "type": "post",
    "url": "/oauth/login",
    "title": "Authenticate a user",
    "group": "Login",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: https://api-rest-model.herokuapp.com/oauth/login\nbody:\n   {\n     \"username\": \"bruno.dalcol\",\n     \"password\": \"123456\"\n     \"blocked\": false,\n   }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"maoiina´bdjba´sdfasd484asdf5as45454a54sd5fa454sd81asdd8sd\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/routes.js",
    "groupTitle": "Login",
    "name": "PostOauthLogin"
  },
  {
    "type": "delete",
    "url": "/users",
    "title": "Delete a user",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token authentication value.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  s\"message\" : \"User removed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Request Timeout",
          "content": "HTTP/1.1 408 Token has expired",
          "type": "json"
        },
        {
          "title": "Too Many Requests",
          "content": "HTTP/1.1 429 Too many accounts created from this IP, please try again after an hour",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/routes.js",
    "groupTitle": "User",
    "name": "DeleteUsers"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Find all users",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token authentication value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password crypt</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "bloked",
            "description": "<p>User is bloked?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>Version document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": 1,\n  \"username\": \"bruno.dalcol\",\n  \"password\": \"asdknasdknfasndfasdf\"\n  \"blocked\": false,\n  \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Request Timeout",
          "content": "HTTP/1.1 408 Token has expired",
          "type": "json"
        },
        {
          "title": "Too Many Requests",
          "content": "HTTP/1.1 429 Too many accounts created from this IP, please try again after an hour",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/routes.js",
    "groupTitle": "User",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Find a user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Strings",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token authentication value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password crypt</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "bloked",
            "description": "<p>User is bloked?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>Version document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 1,\n  \"username\": \"bruno.dalcol\",\n  \"password\": \"asdknasdknfasndfasdf\"\n  \"blocked\": false,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Request Timeout",
          "content": "HTTP/1.1 408 Token has expired",
          "type": "json"
        },
        {
          "title": "Too Many Requests",
          "content": "HTTP/1.1 429 Too many accounts created from this IP, please try again after an hour",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/routes.js",
    "groupTitle": "User",
    "name": "GetUsersId"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token authentication value.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: https://api-rest-model.herokuapp.com/users\nbody:\n   {\n     \"username\": \"bruno.dalcol\",\n     \"password\": \"aoasnasknasñaãsodbfa~sdfib\"\n     \"blocked\": false,\n   }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password crypt</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "bloked",
            "description": "<p>User is bloked?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "__v",
            "description": "<p>Version document</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 1,\n  \"username\": \"bruno.dalcol\",\n  \"password\": \"123456\"\n  \"blocked\": false,\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Request Timeout",
          "content": "HTTP/1.1 408 Token has expired",
          "type": "json"
        },
        {
          "title": "Too Many Requests",
          "content": "HTTP/1.1 429 Too many accounts created from this IP, please try again after an hour",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/routes.js",
    "groupTitle": "User",
    "name": "PostUsers"
  }
] });
