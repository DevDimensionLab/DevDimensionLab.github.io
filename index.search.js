var relearn_search_index = [
  {
    "breadcrumb": "plybuild",
    "content": "Plybuild is created with Go and supports multiple platforms including:\nGNU/Linux Windows MacOs ",
    "description": "",
    "tags": null,
    "title": " 1. Basics",
    "uri": "/basics/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  4. Template",
    "content": "Templates is a concept where plybuild effectively merges one project into another. Templates are added to the cloud-config repo under a templates folder, example, and are later referred to by their folder name in the plybuild.json file. A template, like most projects, consists of these filetypes:\nFiletypes Filetypes in templates are\n.kt and .java files If a template supplies a .kt or a .java file, the file is copied to its right destination and the package com.example... line in top of the file is replaced to support the target. I with the same path and filename is found in the target, the file is ignored.\n*.properties files If a template supplies a *.properties file the file is parsed by key=value pairs, and merged correctly into the target. If the target is missing a properties file with the same name as the template supplies, the whole file is copied. plybuild does not check key=value pairs across properties files.\npom.xml files If a template and the target supplies a pom.xml file, the templates pom.xml following definitions are merged over:\n\u003cdependencies\u003e \u003cdependencyManagement\u003e \u003cbuild\u003e\u003cplugins\u003e text files (default) All files not matching the above is eighter copied over if the target does not contain it, or the differences are merged into the end of the targetfile.\nSituations Templates is used in the following situations\nDuring generate See commands generate\nDuring merge See commands merge\nDuring upgrade –deprecated See commands upgrade\n",
    "description": "",
    "tags": null,
    "title": "Basics",
    "uri": "/template/basics/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Build",
    "content": "Initializes an existing project with plybuild files like ply.json. The command also overwrites the pom.xml files with standard formatting and sorting.\nHelp Initializes build project with ply files and formatting Usage: ply build init [flags] Flags: --config-file string Optional config file --dry-run dry run does not write to pom.xml -h, --help help for init -r, --recursive turn on recursive mode --target string Optional target directory (default \".\") Global Flags: --cloud-sync Cloud sync (default true) --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging",
    "description": "",
    "tags": null,
    "title": "Init",
    "uri": "/commands/build/init/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands",
    "content": "The profile command in Plybuild is designed for efficient management of different user profiles, each with its unique configurations and settings. This feature allows users to create, modify, and switch between profiles, enabling a seamless transition across various project environments and personal preferences. It’s especially useful in collaborative settings or for individuals handling multiple projects, as it simplifies the complexity of managing distinct configurations. The command enhances Plybuilds’s customization capabilities, making it a valuable tool for organized and streamlined project management.\nHelp Manage profiles settings for ply Usage: ply profile [flags] ply profile [command] Aliases: profile, profiles Available Commands: config Config display in the terminal Flags: --cloud-sync sync with cloud config repo --edit edit active profile local config -h, --help help for profile --reset reset local config --show show local config --use string switch to profile Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply profile [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Profile",
    "uri": "/commands/profile/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  1. Basics",
    "content": "1.0.0 Changed name from co-pilot to plybuild\n",
    "description": "",
    "tags": null,
    "title": "Whats New",
    "uri": "/basics/whats-new/index.html"
  },
  {
    "breadcrumb": "plybuild",
    "content": " __ __ _ __ __ ____ / /_ __/ /_ __ __(_) /___/ / / __ \\/ / / / / __ \\/ / / / / / __ / / /_/ / / /_/ / /_/ / /_/ / / / /_/ / / .___/_/\\__, /_.___/\\__,_/_/_/\\__,_/ /_/ /____/ == version: v1.0.1 == Usage: ply [command] Available Commands: build Builds a ply project with ply files and formatting help Help about any command plugin Plugin functionality for plybuild profile Manage profiles settings for ply status Status functionality for a project tips Use tips to learn information faster upgrade Upgrade options Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts -h, --help help for ply --json turn on json output logging Additional help topics: ply about About ply Use \"ply [command] --help\" for more information about a command.Plybuild is a versatile and robust command-line interface (CLI) tool designed to streamline and simplify various tasks for its users. It encompasses a wide array of commands, making it a comprehensive utility for diverse operations. Key features include profile for managing user profiles and settings, build for compiling or constructing projects, status for monitoring the current state of operations or processes, and upgrade for updating the tool or its components to the latest version. Each command is tailored to enhance productivity and efficiency, whether for development, deployment, or general system management. Plybuilds’s intuitive design and rich command set cater to both novice users and seasoned professionals, aiming to deliver a seamless and user-friendly experience in handling routine or complex tasks via the command line.\n",
    "description": "",
    "tags": null,
    "title": " 2. Commands",
    "uri": "/commands/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands",
    "content": "Builds a ply project with ply files and formatting Usage: ply build [flags] ply build [command] Aliases: build, generate Available Commands: add Add templates and functionalities for files to a build example Builds example from cloud-config format Format functionality for a project init Initializes build with ply files and formatting options Prints options on spring version, dependencies etc remove Removes files and folders in a ply build project Flags: --application-name string Overrides applicationName from config file --artifact-id string Overrides artifactId from config file --boot-version string Defines spring-boot version to use --cloud-sync Cloud sync (default true) --config-file string Optional config file (default \"ply.json\") --disable-upgrading dont upgrade dependencies --group-id string Overrides groupId from config file -h, --help help for build -i, --interactive Interactive mode --name string Overrides name from config file --package string Overrides package from config file --target string Optional target directory (default \".\") --upstream string Upstream to use, ex: [initializer, none] (default \"initializer\") Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply build [command] --help\" for more information about a command.Example plybuild.json file { \"language\": \"kotlin\", \"groupId\": \"com.example\", \"artifactId\": \"app\", \"package\": \"com.example.app\", \"name\": \"Example REST basic app\", \"team\": { \"name\": \"demo-name\", \"email\": \"demo-email@example.com\" }, \"description\": \"Demo of new app, generated with spring-boot and plybuild templates\", \"dependencies\": [\"web-services\"], \"templates\" : [\"dockerfile\", \"rest-basic\"] }This file is the same file used for project-configuration, and is described at project configuration\nExample usage ",
    "description": "",
    "tags": null,
    "title": "Build",
    "uri": "/commands/build/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Build",
    "content": "Add is a standalone command for merging a specific template into a target. It is the same process used iteratively by generate\nHelp Add templates and functionalities for files to a build Usage: ply build add [command] Available Commands: pom Adds a pom-file into a project template Adds a template from ply-config text Merges two text files Flags: --from string file to add -h, --help help for add Global Flags: --cloud-sync Cloud sync (default true) --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging --target string Optional target directory (default \".\") Use \"ply build add [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Add",
    "uri": "/commands/build/add/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  1. Basics",
    "content": "Plybuild is created with Go and supports multiple platforms including:\nGNU/Linux Windows MacOs Download plybuild Install plybuild with one of the two alternatives\nAlternative 1: Binaries Download the latest binaries from https://github.com/DevDimensionLab/plybuild/releases Alternative 2: Brew Add a new tap brew tap devdimensionlab/plybuildInstall brew install plybuildAlternative 3: Sources plybuild sources are available at https://github.com/DevDimensionLab/plybuild\nClone sources git clone https://github.com/DevDimensionLab/plybuild.gitCompile and install make install",
    "description": "",
    "tags": null,
    "title": "Installation",
    "uri": "/basics/installation/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands",
    "content": "The status command in Plybuild is a practical and informative feature designed to keep users up-to-date with dependency version information. This command serves as a quick and reliable way to check the current versions of dependencies used in a project, and more importantly, it identifies if there are any outdated versions that need attention. By running the status command, users can effortlessly monitor the health and currency of their project’s dependencies, ensuring that all components are running on the latest and most secure versions. This feature is particularly vital for maintaining the stability and security of projects, as outdated dependencies can lead to compatibility issues or security vulnerabilities. The status command streamlines the maintenance process by providing a clear overview of the dependencies, making it an indispensable tool for developers who need to stay ahead in fast-paced and ever-evolving development environments.\nHelp Status functionality for a project Usage: ply status [flags] Flags: --cloud-sync force cloud sync -h, --help help for status -r, --recursive turn on recursive mode --show show project status --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --json turn on json output logging",
    "description": "",
    "tags": null,
    "title": "Status",
    "uri": "/commands/status/index.html"
  },
  {
    "breadcrumb": "plybuild",
    "content": "Plybuilds offers a comprehensive and layered configuration system, encompassing cloud config, project config, and local config, to cater to varying scopes and requirements. The cloud config is designed for settings that need to be consistent across various environments, ideal for settings that must be shared or synchronized across a team or multiple deployments. Project config, on the other hand, focuses on configurations specific to individual projects, allowing for tailored settings that align with the unique needs of each project. Lastly, the local config provides the most immediate layer of customization, enabling users to define settings on their local machine, perfect for personal preferences or machine-specific configurations. This multi-tiered approach ensures that Ply can be finely tuned to different contexts and use cases, offering flexibility and control to users, whether they are managing individual projects or collaborating across larger teams.\n",
    "description": "",
    "tags": null,
    "title": " 3. Configuration",
    "uri": "/configuration/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Build",
    "content": "Help Format functionality for a project Usage: ply build format [command] Available Commands: inherit Removes manual versions from spring dependencies pom Formats pom.xml and sorts dependencies version Removes version tags and replaces them with property tags Flags: --dry-run dry run does not write to pom.xml -h, --help help for format -r, --recursive turn on recursive mode --target string Optional target directory (default \".\") Global Flags: --cloud-sync Cloud sync (default true) --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply build format [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Format",
    "uri": "/commands/build/format/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands",
    "content": "Upgrade is a command for upgrading all or specific parts of a project.\nHelp Perform upgrade on existing projects Usage: ply upgrade [command] Available Commands: 2party Upgrade all 2party dependencies to project 3party Upgrade all 3party dependencies to project all Upgrade everything in project dependency Upgrade a specific dependency on a project deprecated Remove and replace deprecated dependencies in a project interactive Interactively upgrade the project kotlin Upgrade kotlin version in project plugins Upgrade all plugins found in project spring-boot Upgrade spring-boot to the latest version with-versions Upgrade using mvn versions in a project Flags: --cloud-sync force cloud sync --dry-run dry run does not write to pom.xml -h, --help help for upgrade -r, --recursive turn on recursive mode --stealth use alternative pom.xml writer --target string Optional target directory (default \".\") Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply upgrade [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Upgrade",
    "uri": "/commands/upgrade/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Build",
    "content": "Help Builds example from cloud-config Usage: ply build example [flags] Flags: --boot-version string Defines spring-boot version to use --dry-run dry run does not write to pom.xml -h, --help help for example --name string Example name to use --target string Optional target directory (default \".\") --upstream string Upstream to use, ex: [initializer, none] (default \"initializer\") Global Flags: --cloud-sync Cloud sync (default true) --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging",
    "description": "",
    "tags": null,
    "title": "Example",
    "uri": "/commands/build/example/index.html"
  },
  {
    "breadcrumb": "plybuild",
    "content": "A core concept of Plybuild is its innovative use of code templates, which significantly streamlines and enhances the development process. These templates serve as pre-defined, reusable code structures that can be quickly inserted into projects, saving developers from the repetitive task of writing boilerplate code. By providing a library of customizable templates for common patterns and functions, Plybuild enables users to rapidly set up project scaffolds, enforce coding standards, and maintain consistency across various parts of an application. This feature is particularly valuable for accelerating project setup, ensuring best practices, and fostering uniformity, especially in large teams or complex projects. The use of code templates not only boosts efficiency but also aids in reducing the potential for errors, making Plybuild an essential tool for developers looking to optimize their coding workflow.\n",
    "description": "",
    "tags": null,
    "title": " 4. Template",
    "uri": "/template/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands",
    "content": "Plybuild also boasts a versatile plugin section, expanding its functionality beyond the core features. This section enables the integration of additional, specialized features that cater to more specific needs, which might not be necessary for all users but are invaluable for those who require them. The plugin architecture allows for customization and extensibility, letting users tailor the tool to their unique workflows and preferences. Whether it’s adding support for different programming languages, integrating with third-party services, or enhancing existing features, the plugin system makes Plybuild adaptable and scalable. This approach not only keeps the core tool lightweight and focused but also fosters a community-driven expansion where developers can contribute and share plugins, continuously enriching Plybuild’s capabilities.\nPlugin functionality for plybuild Usage: ply plugin [command] Available Commands: bitbucket Bitbucket functionality diagrams Various tools for generating diagrams git Git commands install Various install options for generating autocompletion etc lint Linting commands maven Run maven (mvn) commands query Query dependencies in a project Flags: -h, --help help for plugin Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply plugin [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Plugin",
    "uri": "/commands/plugin/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Build",
    "content": "Help Prints options on spring version, dependencies etc Usage: ply build options [flags] Flags: --examples show plybuild examples -h, --help help for options --maven-repositories show current maven repositories --spring-dependencies show spring boot status --spring-managed show spring boot managed dependencies info --templates show plybuild templates Global Flags: --cloud-sync Cloud sync (default true) --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging --target string Optional target directory (default \".\")",
    "description": "",
    "tags": null,
    "title": "Options",
    "uri": "/commands/build/options/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands",
    "content": "Help A concentrated version of things you need to know for a topic, typically internal know-how that you can't find on the internet Usage: ply tips [flags] ply tips [command] Available Commands: list Lists all tips for current profile show Show tips Flags: -h, --help help for tips Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply tips [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Tips",
    "uri": "/commands/tips/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Build",
    "content": "Help Removes files and folders in a ply build project Usage: ply build remove [flags] Flags: --generated removes plybuild generated files and folders -h, --help help for remove --intellij removes .idea folders and *.iml files -r, --recursive turn on recursive mode Global Flags: --cloud-sync Cloud sync (default true) --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging --target string Optional target directory (default \".\")",
    "description": "",
    "tags": null,
    "title": "Remove",
    "uri": "/commands/build/remove/index.html"
  },
  {
    "breadcrumb": "",
    "content": "A power tool platform for Java and Kotlin developers Starting point for microservice-based application development Simplifies maintaining code templates for efficient collaboration Provides dependency status and automates project dependency upgrades Why? Starting Point for Microservice-Based Application Development Discover the ideal launchpad for your microservice-based projects. Plybuild offers a robust foundation to kickstart your development process, providing essential resources and structures tailored for microservice architecture.\nThe heart of plybuild is the cloud-config, simply run the following command to get a new app running:\nply build example --name rest-service\nSimplified Template Maintenance for Efficient Collaboration The strength of plybuild lies in creating a personalized cloud-config for your organization, featuring live, executable code templates. Unlike static, purpose-rendered templates, these dynamic templates with actual running code simplify maintenance significantly. This live code capability ensures easier upkeep and adaptability for your projects.\nDependency Status and Automated Project Upgrades Stay ahead with automated dependency management. Our tool keeps you informed about dependency status and takes the hassle out of upgrading project dependencies. With automated upgrades, your projects remain up-to-date, secure, and optimized without the usual manual intervention, ensuring smooth development cycles.\n",
    "description": "",
    "tags": null,
    "title": "plybuild",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  4. Template",
    "content": "During the merge process of a template into a target directory plybuild ignores the following files:\nDefault ignore Regardless what is defined in the ignore files, plybuild will ignore filenames matching:\n[ \"Application\", \"plybuild.json\", \".plybuild.ignore\", \".gitignore\", \".mvn\", \"mvnw\", \"mvnw.cmd\", \".idea\", \".iml\" ]Ignoring filesnames matching Application\nThe first entry Application, in the list above, enables plybuild to ignore files like WebApplication.kt or FooApplication.java. Files which are typically files containing the @SpringBootApplication. It is important that no template contain critical code inside of these files, as they are ignored during the merge process.\nDefinitions in ignore files plybuild by default reads the .gitignore file from the template, and ignores all the files matching. In addition a plybuild.ignore file can be added for files which should exist in the version control, but not be part of the template during merging.\nExample .plybuild.ignore FooController.ktNote: absolute path is not necessary\nExample .gitignore HELP.md target",
    "description": "",
    "tags": null,
    "title": "Ignores",
    "uri": "/template/ignore/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  3. Configuration",
    "content": "plybuild supports cloud configuration for some of its more advanced features. A cloud configuration is simply an available git repository referred to in the local config file ~/.plybuild/local-config.yaml. An example is shipped with plybuild at https://github.com/plybuild/plybuild-config.\nRequirements The requirements for the cloud config repository is that there exists a template folder, and a deprecated.json and services.json,file on the root level.\nExample - Deprecated.json { \"type\": \"deprecated\", \"data\": { \"dependencies\": [ { \"groupId\": \"log4j\", \"artifactId\": \"log4j\", \"files\": [\"src/main/resources/log4j.properties\"], \"associated\": { \"files\": [\"src/main/resources...\"], \"dependencies\": [ { \"groupId\": \"org.slf4j\", \"artifactId\": \"slf4j-log4j12\", \"files\": [\"src/main/resources...\"] } ] }, \"replacement_templates\": [\"logstash-logback\"] } ] } }Example - Services.json { \"type\": \"services\", \"data\": [ { \"groupId\": \"com.example\", \"artifactId\": \"flyway-demo\", \"defaultEnvironment\": \"prod\", \"environments\": [ { \"name\": \"prod\", \"_links\": { \"info\": { \"href\": \"http://localhost:8080/actuator/info\" } } }, { \"name\": \"staging\", \"_links\": { \"info\": { \"href\": \"http://localhost:8081/actuator/info\" } } } ] } ] }Example - Project-defaults.json This file is overriding the project settings for each working project. disableUpdatesFor, and maxVersionForDependencies adds to the existing plybuild.json file.\n{ \"type\": \"project-defaults\", \"settings\": { \"disableDependencySort\": false, \"disableKotlinUpgrade\": false, \"disableSpringBootUpgrade\": false, \"disableUpgradesFor\": [ { \"groupId\": \"com.example\", \"artifactId\": \"artifactId\" } ], \"maxVersionForDependencies\": [ { \"groupId\": \"com.example\", \"artifactId\": \"artifactId\", \"maxVersion\": \"0.0.1\" } ] } }",
    "description": "",
    "tags": null,
    "title": "Cloud",
    "uri": "/configuration/cloud/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  3. Configuration",
    "content": "In every plybuild project and template there should be located a ply.json file describing the project.\nExample plybuild.json { \"language\": \"kotlin\", \"groupId\": \"com.example\", \"artifactId\": \"app\", \"package\": \"com.example.app\", \"name\": \"Example REST basic app\", \"team\": { \"name\": \"demo-name\", \"email\": \"demo-email@example.com\" }, \"description\": \"Demo of new app, generated with spring-boot and plybuild templates\", \"dependencies\": [\"web-services\"], \"templates\" : [\"dockerfile\", \"rest-basic\"], \"settings\": { \"disableDependencySort\": false, \"disableKotlinUpgrade\": false, \"disableSpringBootUpgrade\": false, \"disableUpgradesFor\": [ { \"groupId\": \"com.example\", \"artifactId\": \"artifactId\" } ], \"maxVersionForDependencies\": [ { \"groupId\": \"com.example\", \"artifactId\": \"artifactId\", \"maxVersion\": \"0.0.1\" } ] } }The dependencies key in this file refers to spring-boot dependencies.\n",
    "description": "",
    "tags": null,
    "title": "Project",
    "uri": "/configuration/project/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  3. Configuration",
    "content": "The first time running plybuild a ~/.ply configuration folder is created with a ~/.ply/local-config.yaml file. The contents of this file by default are:\ncloudConfig: git: url: https://github.com/plybuild/plybuild-config.git",
    "description": "",
    "tags": null,
    "title": "Local",
    "uri": "/configuration/local/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Bitbucket functionality Usage: ply plugin bitbucket [command] Available Commands: sync Synchronizes projects from bitbucket Flags: -h, --help help for bitbucket Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply plugin bitbucket [command] --help\" for more information about a command.Sync The bitbucket sync commands depends on valid credentials and HTTP address inn ~/.plybuild/local-config.yaml\nsourceProvider: host: \"https://...\" access_token: \"...\"",
    "description": "",
    "tags": null,
    "title": "Bitbucket",
    "uri": "/commands/plugin/bitbucket/index.html"
  },
  {
    "breadcrumb": "plybuild",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Various tools for generating diagrams Usage: ply plugin diagrams [command] Available Commands: kibana Specialized (experimental) command for executing a kibana-query based on a fetch-request [arg: fetch-file] and exporting the result to a json-file [arg: output-file] maven-graph creates a graph using maven for dependencies in a project structurizr Adding PNG-output support for structurizr with the help of graphviz Flags: -h, --help help for diagrams -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply plugin diagrams [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Diagrams",
    "uri": "/commands/plugin/diagrams/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Git commands Usage: ply plugin git [command] Available Commands: install-hooks install git hooks from cloud config Flags: --cloud-sync force cloud sync -h, --help help for git -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply plugin git [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Git",
    "uri": "/commands/plugin/git/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  1. Basics",
    "content": "Most of the ply commands operate on some common principles, target, recursive, and dry-run.\n--json Json output formatting\n--force Force defaults for prompts\n--doc Open documentation website\n--target By default ply operates on the current folder similar to tools like git. However a custom --target flag is available for most commands and enables the used to use ply ... --target outside of the working folder.\n--recursive Recursive mode is enabled with --recursive or -r for most commands. This mode starts by building a list of subprojects on the current target, and iteratively working on each subproject. Example of this is the upgrade ply upgrade all -r command which will upgrade the current and all subprojects found in the working directory.\n--dry-run Dry-run mode is enabled with the --dry-run flag, and are meant commands which overwrites files. When dry-run in enabled no files is changed or overwritten. Example ply upgrade all --dry-run is effectively the same as a status printout.\nGit plybuild is git aware on the working projects, and will warn the user if it operates on a dirty repository. It will however continue as normal.\nExample INFO[0000] upgrading everything for file webservice/pom.xml WARN[0000] operating on a dirty git repo",
    "description": "",
    "tags": null,
    "title": "Global flags",
    "uri": "/basics/global-flags/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Various install options for generating autocompletion etc Usage: ply plugin install [flags] Flags: --autocomplete Generate autocomplete files -h, --help help for install Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging",
    "description": "",
    "tags": null,
    "title": "Install",
    "uri": "/commands/plugin/install/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Dependencies Some of these commands depends on:\nktlint Help Linting commands Usage: ply plugin lint [command] Available Commands: kotlin uses ktlint for linting kotlin code Flags: -h, --help help for lint -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply plugin lint [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Lint",
    "uri": "/commands/plugin/lint/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Dependencies Some of these commands depends on:\nmvn dot (graphviz) Help Run maven (mvn) commands Usage: ply plugin maven [command] Available Commands: analyze Perform an analyze on a projects boot-run runs a spring boot application checkstyle runs checkstyle enforcer runs enforcer graph creates a graph using maven for dependencies in a project owasp runs owasp Flags: -h, --help help for maven -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply plugin maven [command] --help\" for more information about a command.Graphing plybuild supports graphing of dependencies through the maven plugin: https://github.com/ferstl/depgraph-maven-plugin\ncreates a graph using maven for dependencies in a project Usage: ply plugin maven graph [flags] ply plugin maven graph [command] Available Commands: 2party creates a graph only for 2party dependencies in a project Flags: --exclude-filters stringArray exclude filter rules --exclude-test-scope exclude test scope from graph -h, --help help for graph --include-filters stringArray include filter rules --open open report in browser Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Use \"ply plugin maven graph [command] --help\" for more information about a command.Graph filters By default, no filters are applied to the graph. However, both exclude and include filter are supported. Both of these filers are proxies for the filters supported by the plugin: https://github.com/ferstl/depgraph-maven-plugin/wiki/Filtering\nplybuild plugin maven graph --include-filters=\"org.springframework*\" --include-filters=\"org.jetbrains*\"plybuild plugin maven graph --exclude-filters=\"org.springframework*\" --exclude-filters=\"org.jetbrains*\"Graph style Before generating the graph a style definition file is placed in target/dependency-graph-styles.json. This file is generated with the following defaults (“com.example*” is replaced with the actual groupId of the project):\n{ \"node-styles\": { \",,test\": { \"type\": \"box\", \"color\": \"#d2d2d2\", \"fill-color\": \"#d3d3d3\", \"style\": \"filled,rounded\" }, \"com.example*\": { \"type\": \"box\", \"color\": \"#95ca7d\", \"fill-color\": \"#79B4B7\", \"style\": \"filled,rounded\" }, \"org.jetbrains*\": { \"type\": \"box\", \"color\": \"#F9C5D5\", \"fill-color\": \"#FEE3EC\", \"style\": \"filled,rounded\" }, \"org.springframework*\": { \"type\": \"box\", \"color\": \"#95ca7d\", \"fill-color\": \"#b4d4a1\", \"style\": \"filled,rounded\" } } }If the file already exists in the target folder, it will not be overwritten. More information on this file is found at: https://github.com/ferstl/depgraph-maven-plugin/wiki/Styling\n",
    "description": "",
    "tags": null,
    "title": "Maven",
    "uri": "/commands/plugin/maven/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Query dependencies in a project Usage: ply plugin query [flags] Flags: -a, --artifactId string artifactId -g, --groupId string groupId -h, --help help for query --target string Optional target directory (default \".\") Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging",
    "description": "",
    "tags": null,
    "title": "Query",
    "uri": "/commands/plugin/query/index.html"
  },
  {
    "breadcrumb": "plybuild",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
