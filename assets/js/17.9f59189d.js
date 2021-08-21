(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{385:function(t,e,a){"use strict";a.r(e);var s=a(44),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"graphql-subscriptions-with-desktop-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphql-subscriptions-with-desktop-notifications"}},[t._v("#")]),t._v(" GraphQL Subscriptions (with desktop notifications)")]),t._v(" "),a("p",[t._v("You can test your GraphQL subscriptions easily and also get a notification when you are away from the\napp (desktop apps only). This is very handy when developing apps that use the realtime feature of\nGraphQL, like chatting ang gaming applications that need realtime feedback.")]),t._v(" "),a("p",[t._v("Altair supports a number of subscription implementations:")]),t._v(" "),a("h3",{attrs:{id:"websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" Websocket")]),t._v(" "),a("p",[t._v("This supports both the the original "),a("a",{attrs:{href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("subscriptions-transport-ws protocol"),a("OutboundLink")],1),t._v(" as well as the new "),a("a",{attrs:{href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphql-ws protocol"),a("OutboundLink")],1),t._v(", which are the more common specifications used for GraphQL subscriptions.")]),t._v(" "),a("h3",{attrs:{id:"aws-appsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-appsync"}},[t._v("#")]),t._v(" AWS AppSync")]),t._v(" "),a("p",[t._v("This supports the MQTT-based subscription protocol used in "),a("a",{attrs:{href:"https://docs.aws.amazon.com/appsync/latest/devguide/welcome.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS AppSync"),a("OutboundLink")],1),t._v(" which is an enterprise-level, fully managed GraphQL service with real-time data synchronization and offline programming features.")]),t._v(" "),a("p",[t._v("The connection parameters are in JSON format as following")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{\n  "aws_project_region": "<AWS_REGION>", //AWS Region abbreviation\n  "aws_appsync_graphqlEndpoint": "https://******", //The value you can copy from AWS AppSync Endpoint, please use the HTTPS value\n  "aws_appsync_region": "<AWS_REGION>", //AWS Region abbreviation\n  "aws_appsync_authenticationType": "<AWS_APPYSYNC_Authentication_TYPE>", //API_KEY, OPENID_CONNECT or AMAZON_COGNITO_USER_POOLS (IAM is not supported)\n  "aws_appsync_apiKey": "*******", //API Key, required if authentication type = API_KEY,\n  "aws_appsync_jwtToken": "******", //JWT Token, required if authentication type = OPENID_CONNECT or AMAZON_COGNITO_USER_POOLS\n}\n')])])]),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/15103463/99538456-49d97080-29ad-11eb-9002-e744eec42780.png",alt:"Specifying connection parameters"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/pDhCiBn.png",alt:"AWS AppSync subscription"}})]),t._v(" "),a("h3",{attrs:{id:"rails-action-cable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-action-cable"}},[t._v("#")]),t._v(" Rails Action Cable")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://guides.rubyonrails.org/action_cable_overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Action Cable"),a("OutboundLink")],1),t._v(" seamlessly integrates WebSockets with the rest of your Rails application. It allows for real-time features to be written in Ruby in the same style and form as the rest of your Rails application, while still being performant and scalable.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/3378171/99864870-e8afc980-2b73-11eb-8eb1-ff1334c4dc21.png",alt:"Specifing action cable connection parameters"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/3378171/99864871-ea798d00-2b73-11eb-835b-69fa6ae0726e.png",alt:"Action cable subscription"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);