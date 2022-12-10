## Web Framework with TypeScript

### Installation
- Method 1: Parcel bundler
  - install parcel2 with npm at global level `npm install parcel -g`
  - Run project to browser: `parcel -p <port_number> index.html`
  - install local backend server JSON server: `npm install --save-dev json-server`
  - Now you can check your project in browser
- Method 2: npm 
  - initialize npm project: `npm init`, and package.json created at root directory.
  - initialize typescript compiler: `tsc --init`, tsconfig.json template created in root directory.
  - modify the `rootDirs` and `outDir` in `tsconfig.json`:
    - `rootDirs`: [",/src""]
    - `outDir`: "./build"
  - install necessary dependencies:
    - install node typescript support: `npm i --save-dev @types/node`
    - install nodemon: `npm i --save-dev nodemon`
    - install concurrently: `npm i --save-dev concurrently`
  - install local backend server JSON server: `npm i --save-dev json-server`

### Git branches:
- main: latest
- mega-user: one class with all the methods
- composition: refactor using composition pattern
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
   +setName(update:UserProps):(void)
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




#### Note:
*Parcel bundler require `type="module"` added into the script tag at `index.html`*
