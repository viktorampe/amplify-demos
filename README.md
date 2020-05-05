Original turorial: https://aws-amplify.github.io/docs/js/start?platform=angular

# 1 - Amazon Webservicess Account aanmaken

Maak een account aan op https://aws.amazon.com/
* Installeer aws-amplify core `npm i aws-amplify --save`

# 2 - Webapp aanmaken

## Installeer cli globally(npm nodig) 

1. `npm install -g @aws-amplify/cli`
2. `amplify configure` (opent AWS control panel om in te loggen)
3. Kies een AWS Region (eu-west-1)
4. Kies username voor IAM user (viktor) (wat is IAM user?) (opent AWS dashboard )
5. Doorloop setup, bewaar secret acces-key en acces-key-id

## Maak (Angular) project aan

1. `npm install -g @angular/cli`
2. `ng new myAmplifyProject`
3. Voeg amplify toe aan project `npm install @aws-amplify/api @aws-amplify/pubsub` (in root van project)

# 3 - Setup backend

### Amplify init

1. Run volgend cmd in een nieuw terminal venster: `amplify init`
2. name for project: 'myAmplifyProject'
3. name for environment: 'myenv'
4. default editor: 'Visual Studio Code'
5. type of app: 'javascript'
6. javascript framework: 'Angular'
7. source directory path: 'src'
8. distribution directory path: 'dist/projectName'
8. build cmd: default (npm.cmd run-script build)
9. start cmd: 'ng serve'
10. new user: 'Y' (nieuwe user: amplify-viktor)

Na de setup wordt een nieuwe folder gegenereerd: 'amplify'

Verifieer dat de CLI geconfigureerd is voor de app met `amplify status`.

Er worden nog geen resources getoond. Wanneer features worden toegevoegd kun je `amplify push` gebruiken om ze toe te voegen aan de tabel.

# 4 - API en Database toevoegen

## GraphQL API toevoegen / schema.graphql

`amplify add api`

1. service: 'GraphQL'
2. api name: 'myamplifyproject'
3. default authorization type: 'API key'
4. description for api key: 'myamplifyproject api key'
5. days till expire: '7'
6. configure advanced settings: 'no'
7. do you have an annotated GraphQL schema?: 'no'
8. do you want an guided schema creation: 'yes'
9. describe your project: 'single objects'
10. edit scema now?: yes
11. edit  > enter

* Dit genereerd een GraphQL schema/entiteit. Deze kun je terug vinden in het project > amplify > backend > api > myamplifyproject > schema.graphql.

* Onder amplify > backend > api > myamplifyproject > build > resolvers staan 'resolvers' (= methoden om api aan te spreken)

* Extra info over GraphQL models : https://aws-amplify.github.io/docs/cli-toolchain/graphql

## Pushen naar cloud / APP.service.ts file

Voer `amplify push` uit om je local aangemaakte backend resource to pushen naar de cloud.

1. Do you want to generate code for your newly created GraphQL API? 'Yes'
2. Choose the code generation language target? 'angular'
3. Enter the file name pattern of graphql queries, mutations and subscriptions? 'src\graphql\**\*.graphql'
4. Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions? 'Yes'
5. Enter maximum statement depth [increase from default if your schema is deeply nested]? '2'
6. Enter the file name for the generated code? src\app\API.service.ts

* Genereerd src > app > API.service.ts file

* API Key en endpoint kunnen altijd opgevraagd worden met `amplify status`


## GraphQL Transform 

### Annotations (transformers)

| Directive  | Descritpion |
| ------------- | ------------- |
| @model (on Object)  | Store objects in DynamoDB and configer CRUD resolvers, can be protected with the @auth directive  |
| @auth (on Object)  | Define authorization strategeis for the API  |
| @connection (on Field)  | Specify relationships between @model objects  |
| @searchable (on Object)  | Stream data of an @model object type to Amazon Elastisearch Service |
| @versioned (on Object)  | Add object versioning and conflict detection to a @model.  |

### Models

*  `id: ID!` is een verplicht attribuut
```
type Post @model {
  id: ID! # id: ID! is a required attribute.
  title: String!
  tags: [String!]!
}
```

* Gegenereerde queries/mutations/subscriptions kunnen gewijzigd worden
```
# Kan enkel opgevraagd worden met 'post(id: ID!): Post'
type Post @model(queries: { get: "post" }, mutations: null, subscriptions: null) {
  id: ID!
  title: String!
  tags: [String!]!
}
```

* Met het @key directive kan je custom index structuren implementeren

```
# Get customers by email.
type Customer @model @key(fields: ["email"]) {
  email: String!
  username: String
}

```

Laat dit toe:

```
query GetCustomerById {
  getCustomer(email:"me@email.com") {
    email
    username
  }
}
```

* Met het @auth directive kan je models afschermen 

```
# The simplest case
type Post @model @auth(rules: [{allow: owner}]) {
  id: ID!
  title: String!
}

# The long form way
type Post
  @model
  @auth(
    rules: [
      {allow: owner, ownerField: "owner", operations: [create, update, delete, read]},
    ])
{
  id: ID!
  title: String!
  owner: String
}
```

### Relaties

#### One-to-one

```
type Session @model {
  id: ID!
  title: String!
  pincode: Int!
  players: [Player] @connection(keyName: "bySession", fields: ["id"])
  whiteboardID: ID!
  whiteboard: Whiteboard @connection(fields: ["whiteboardID"])
}
 
type Whiteboard @model {
  id: ID!
  title: String
  defaultColor: String
  cards: [Card] @connection(name: "whiteboardCards")
}
```
=> Een session opvragen toont het whiteboard object

```
type Session @model {
  id: ID!
  title: String!
  pincode: Int!
  players: [Player] @connection(keyName: "bySession", fields: ["id"])
  
}
 
type Whiteboard @model {
  id: ID!
  sessionID: ID!
  session: Session @connection(fields: ["sessionID"])
  title: String
  defaultColor: String
  cards: [Card] @connection(name: "whiteboardCards")
}
```
=> Een whiteboard opvragen toont het session object

#### One-to-many

Een whiteboard heeft meerdere cards.

```
type Whiteboard @model {
  id: ID!
  title: String
  defaultColor: String
  cards: [Card] @connection(keyName: "byWhiteboard", fields: ["id"])
}

type Card
  @model
  @key(
    name: "byWhiteboard"
    fields: ["whiteboardID"]
    queryField: "cardByWhiteboardID"
  ) {
  id: String!
  whiteboardID: ID!
  whiteboard: Whiteboard @connection(fields: ["whiteboardID"])
  mode: Int!
  type: Int!
  color: String!
  description: String
  image: String
  top: Int!
  left: Int!
  viewModeImage: Boolean!
  inShelf: Boolean!
}
```
=> Door op het Card object een key te definiëren, worden alle bijhorende Cards inbegrepen wanneer een whiteboard wordt opgevraagd.

#### Many-to-many

```
type Employee @model {
  id: ID!
  name: String
  projects: [EmployeeProject] @connection(name: "EmployeeProjects")
}

type Project @model {
  id: ID!
  name: String
  employees: [EmployeeProject] @connection(name: "ProjectEmployees")
}

type EmployeeProjects @model (queries: null) {
  id: ID!
  project: Project @connection(name: "ProjectEmployees")
  employee: Employee @connection(name: "EmployeeProjects")
}

```
=> Om een many-to-many relatie te gebruiken, moet een 3e model gemaakt worden die dient als tussen tabel.
=> De tussentabel zal niet direct gequeried worden.

=> Employees kunnen worden toegeveogd aan een project 
```
createEmployeeProjects({
  employeeProjectsProjectId: 'id-van-project'
  employeeProjectsEmployeeId: 'id-van-employee'
}) {
  id
}
```
=> Project met employees opvragen
```
getProject('id') {
  name
  employees {
    items{
      employee{
        name
      }
    }
  }
}
```



Meer info op https://aws-amplify.github.io/docs/cli-toolchain/graphql

## DynamoDB

DynamoDB is een key-value database. Dat wil zeggen dat gegevensopslag gebeurd als een woordenboek of hashtabel. Key-value databases zijn voornamelijk ontworpen voor het opslaan, ophalen en beheren van associatieve arrays.

Objecten kunnen verwijdert worden ookal zijn er nog FK's naar dat object (bv Een 'post' kan je verwijderen ookal heeft het nog 'comments'. De 'comments' bijven in DB zitten). Dat is een van de kenmerken van een key-value DB. De data is niet relationeel.

# 5 - Integreer API in Webapp

## Gebruik API.service.ts

1. Update `main.ts`

```
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsconfig from './aws-exports';

API.configure(awsconfig);
PubSub.configure(awsconfig);
```

Manuele configuratie kan:

```
const myAppConfig = {
    // ...
    'aws_appsync_graphqlEndpoint': 'https://xxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
    'aws_appsync_region': 'us-east-1',
    // USING API_KEY
    'aws_appsync_authenticationType': 'API_KEY',
    'aws_appsync_apiKey': 'da2-xxxxxxxxxxxxxxxxxxxxxxxxxx',
    // USING AWS_IAM
    'aws_appsync_authenticationType': 'AWS_IAM',
    // ...
}

Amplify.configure(myAppConfig);
```


2. Update `src/tsconfig.app.json`

```
"compilerOptions": {
    "types" : ["node"]
}
```

3. Update `src/polyfills.ts`

```
(window as any).global = window;

(window as any).process = {
  env: { DEBUG: undefined },
};
```

4. update `src/app/app.component.ts`

```
import { APIService } from './API.service';

export class AppComponent implements OnInit {

  todos: any[];

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    this.apiService.ListTodos().then((evt) => {
      this.todos = evt.items;
    });
  }

  createTodo() {
    this.apiService.CreateTodo({
        name: 'Angular',
        description: 'testing'
    });
  }
}
```

5. Update `src/app/app.component.html`

```
<button (click)="createTodo()">Add Todo</button>
```

## Subscribe op realtime data

1. Pas onCreate aan in app.component.ts

```
async ngOnInit() {
    // Get Todo's
    this.apiService.ListTodos().then((evt) => {
        this.todos = evt.items;
    });
    // Subscribe for realtime data updates
    this.apiService.OnCreateTodoListener.subscribe((evt) => {
        const data = (evt as any).value.data.onCreateTodo;
        this.todos = [...this.todos, data];
    });
}
```

## Amplify console / DynamoDB

Voer `amplify console api` uit om de console te openen in de browser

1. Please select from one of the below mentioned services: 'GraphQL'


## Mutations / queries / subscriptions

Een lijst van mogelijke operations is terug te vinden onder src > graphql

# 6 - Launch App

Voer `amplify add hosting` uit

1. Select the plugin module to execute 'Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)'
2. Choose a type 'Manual deployment'



* Hosting endpoint: http://myamplifyprojectbucket-test.s3-website-eu-west-1.amazonaws.com

Voer `amplify publish` uit

1. Are you sure you want to continue? 'Yes'

# 7 - Authorization toevoegen

documentation: https://aws-amplify.github.io/docs/js/authentication


* `amplify add auth`

* `amplify push`

Er wordt een config file toegevoegd: amplify > backend > auth > parameters.json

* `amplify console auth`

Onder General settings > Users and groups kun je users aanmaken.

amplify console api om naar de api console te navigeren. Ga naar Settings > Default autorization mode > Stel Amozon Cognito User Pool in

Ga naar Queries. Je kunt nu inloggen met het zonet gecreëerde account. Wanneer er naar een client ID wordt gevraagd kun je die terugvinden in 'projectnaam' > src > aws-exports.js

##  7.1 - In App implementeren

1. Componenten aanmaken

```
ng g c auth
ng g c profile
```

2. Amplify Angular Libraries toevoegen 

```
npm install --save aws-amplify
npm install --save aws-amplify-angular
```

3. src/polyfills.ts file aanpassen

```
(window as any).global = window;

(window as any).process = {
  browser: true,
  env: { DEBUG: undefined },
};
```

4. Index.html aanpassen

```
<script>
    if(global === undefined) {
      var global = window;
    }
</script>
```

5. Update src/main.ts

```
import Amplify from 'aws-amplify';
import amplify from './aws-exports';

Amplify.configure(amplify);
```

6. Update app-routing.module.ts

```
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];
```

7. Gebruik `Auth` 

https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#signin


```
import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  btnSigninClicked() {

    Auth.signIn(this.username, this.password)
      .then(res => console.log(res))
  }
}
```



# 8 - App bijwerken 

## GraphQL Schema updaten

* Ga naar amplify/backend/api/YOUR-API-NAME/schema.graphql. (NIET het schema uit build folder)
* Pas het schema aan

```
type Todo @model {
  id: ID!
  name: String!
  description: String
  priority: String
}
```

* Save: `amplify api gql-compile`  daarna: `amplify push`

## API.service.ts bijwerken

Als je de return value's van queries wilt aanpassen (bv om nested objecten terug te krijgen in een listquery), 
kun je de API.service.ts file aanpassen.

bv: (in ListBlogs posts items toevoegen)

```
const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            posts {
              __typename
              nextToken
              items {
                __typename
                id
                title
              }
            }
          }
          nextToken
        }
      }`;
```
