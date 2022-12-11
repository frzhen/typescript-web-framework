## Web Framework with TypeScript

### Execution:
- run on browser: `npm run web`
- run on terminal only: `npm run dev`
### Installation
- run on browser: Parcel bundler
  - install parcel2 with npm at global level `npm install parcel -g`
  - Run project to browser: `parcel -p <port_number> index.html`
  - install local backend server JSON server: `npm install --save-dev json-server`
    - create `db.json` in root directory:
    ```json
    {
        "users": []
    }
    ```
    - run json server at a different terminal window at root directory:
      - `json-server -w db.json`
  - Now you can check your project in browser
- run on terminal: 
  - initialize npm project: `npm init`, and package.json created at root directory.
  - initialize typescript compiler: `tsc --init`, tsconfig.json template created in root directory.
  - modify the `rootDirs` and `outDir` in `tsconfig.json`:
    - `rootDirs`: [",/src""]
    - `outDir`: "./build"
  - <a name="dependencies"></a>install necessary dependencies:
    - install node typescript support: `npm i --save-dev @types/node`
    - install nodemon: `npm i --save-dev nodemon`
    - install concurrently: `npm i --save-dev concurrently`
    - install axios: `npm i --save-dev axios`
  - install local backend server JSON server: `npm i --save-dev json-server`
  - default port is 3000, you can allocate a different port by using `-p <port_number>`
  - in browser, got to `http://localhost:3000` to check documentation
  - in browser, got to `http://localhost:3000/users` for resource
#### Note:
*Parcel bundler require `type="module"` added into the script tag at `index.html`*

### Git branches:
- main: latest
- mega-user: one class with all the methods:
    - mega-user-JSON-server: this is where we added on JSON server and use axios to persist data in db.json.
- composition-refactor: refactor using composition pattern
- reusable: refactor to not limited to User class


### Structure
- Model Classes:(`/src/models/`)
    - Handle data;
    - Represent Users;
    - Blog Posts;
    - Images,
    - etc.
- View Classes:
    - Handle HTML;
    - Handle Events;
    - 
### Requirements
- General Requirements:
    - need to create a class to represent a User and its data, name and age;
    - User class needs to have the ability to store some data, retrieve it and change it;
    - needs to have the ability to notify the rest of the app when some data is changed, reactivity;
    - User needs to be able to persist data to an outside server, and then retrieve it at some future point
- Extraction-Approach:
    - build class User as a 'mega' class with tons of methods
    - refactor User to use composition
    - refactor User to be a reusable class that can represent any piece of data, not just User


#### Mega-User Class diagram
```mermaid
   classDiagram
   class MegaUser {
   -data: UserProps
   +get(propName:string):(string|number)
   +set(update:UserProps):(void)
   -getEventMethods(eventName: string): (Callback[])
   +on(eventName: string, callback:)
   +trigger(eventName:string):(void)
   +fetch():(Promise)
   +save()(Promise)
   }
   class UserProps {
   <<interface>>
   +name: string
   +age: number
   }
   MegaUser *-- UserProps: Composition
   class Callback {
   <<Type>>
   +empty_callback_function()
   }
   MegaUser <.. Callback: Association
   class Events {
   <<Type>>
   +keys_of_string_and_list_of_callback_functions
   }
   Events <|-- Callback: Composition
   MegaUser <.. Events: Association
```
#### Composition Class Diagram
```mermaid
   classDiagram
   class User {
   +events: Eventing
   -data: UserProps
   +get(propName:string):(string|number)
   +set(update:UserProps):(void)
   +fetch():(Promise)
   +save()(Promise)
   }
   class UserProps {
   <<interface>>
   +name: string
   +age: number
   }
   User *-- UserProps: Composition
   class Callback {
   <<Type>>
   +empty_callback_function()
   }
   User <.. Callback: Association
   User *-- Eventing: Composition
   class Events {
   <<Type>>
   +keys_of_string_and_list_of_callback_functions
   }
   Eventing <|-- Callback: Composition
   Eventing <.. Events: Association
    class Eventing {
   -event_dict: Events
   -getEventMethods(eventName: string): (Callback[])
   +on(eventName: string, callback:)
   +trigger(eventName:string):(void)
   }
```




