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
    "content": "Help Manage profiles settings for ply Usage: ply profile [flags] ply profile [command] Aliases: profile, profiles Available Commands: config Config display in the terminal Flags: --cloud-sync sync with cloud config repo --edit edit active profile local config -h, --help help for profile --reset reset local config --show show local config --use string switch to profile Global Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts --json turn on json output logging Use \"ply profile [command] --help\" for more information about a command.",
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
    "content": " __ __ _ __ __ ____ / /_ __/ /_ __ __(_) /___/ / / __ \\/ / / / / __ \\/ / / / / / __ / / /_/ / / /_/ / /_/ / /_/ / / / /_/ / / .___/_/\\__, /_.___/\\__,_/_/_/\\__,_/ /_/ /____/ == version: v1.0.1 == Usage: ply [command] Available Commands: build Builds a ply project with ply files and formatting help Help about any command plugin Plugin functionality for plybuild profile Manage profiles settings for ply status Status functionality for a project tips Use tips to learn information faster upgrade Upgrade options Flags: --debug turn on debug output --doc open documentation website --force uses default for prompts -h, --help help for ply --json turn on json output logging Additional help topics: ply about About ply Use \"ply [command] --help\" for more information about a command.",
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
    "content": "Status is a command for printing status on a plybuild project. By default it outputs available upgrades.\nHelp Status functionality for a project Usage: ply status [flags] Flags: --cloud-sync force cloud sync -h, --help help for status -r, --recursive turn on recursive mode --show show project status --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --json turn on json output logging",
    "description": "",
    "tags": null,
    "title": "Status",
    "uri": "/commands/status/index.html"
  },
  {
    "breadcrumb": "plybuild",
    "content": "",
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
    "breadcrumb": "plybuild \u003e  2. Commands",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Plugin",
    "uri": "/commands/plugin/index.html"
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
    "content": "",
    "description": "",
    "tags": null,
    "title": " 4. Template",
    "uri": "/template/index.html"
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
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Various install options for generating autocompletion etc Usage: ply install [flags] Flags: --autocomplete Generate autocomplete files -h, --help help for install Global Flags: --debug turn on debug output --json turn on json output logging",
    "description": "",
    "tags": null,
    "title": "Install",
    "uri": "/commands/plugin/install/index.html"
  },
  {
    "breadcrumb": "",
    "content": "A little “go help” for the Java/Kotlin developers using Maven. Upgrade your pom.xml dependencies to latest and greatest! Easy and fast Brings feature to the table, not found anywhere else, stay tuned! Why? No requirements No installs of maven-plugins required, so if you a working in a multi-repo developer environment with lots of 2party dependencies and repos, you can easily upgrade them with plybuild upgrade 2party.\nNatural semantics Brings natural semantics and support for different types of dependencies to the table: Kotlin, 2party, spring-boot (curated dependencies), (other) 3party\nOpen source Can be used as a library for other go-projects automating the upgrade process\nHeads up plybuild rewrites your pom.xml, so make sure that everything committed before testing out plybuild start with ply format pom, verify that the rewrite of the pom.xml is ok, commit, and from now on you will easily see the diff that plybuild introduces with ply upgrade \u003c2party|3party|spring-boot|plugins|all\u003e or just use ply status (no rewrite) and manually upgrade your pom.xml based on what is reported as outdated, current option if you need to keep your pom.xml formatting ",
    "description": "",
    "tags": null,
    "title": "plybuild",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Various tools for generating diagrams Usage: ply diagrams [command] Available Commands: kibana Specialized (experimental) command for executing a kibana-query based on a fetch-request [arg: fetch-file] and exporting the result to a json-file [arg: output-file] maven-graph creates a graph using maven for dependencies in a project structurizr Adding PNG-output support for structurizr with the help of graphviz Flags: -h, --help help for diagrams -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --json turn on json output logging Use \"ply diagrams [command] --help\" for more information about a command.",
    "description": "",
    "tags": null,
    "title": "Diagrams",
    "uri": "/commands/plugin/diagrams/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Bitbucket functionality Usage: ply bitbucket [command] Available Commands: sync Synchronizes projects from bitbucket Flags: -h, --help help for bitbucket Global Flags: --debug turn on debug output --json turn on json output logging Use \"ply bitbucket [command] --help\" for more information about a command.Sync The bitbucket sync commands depends on valid credentials and HTTP address inn ~/.plybuild/local-config.yaml\nsourceProvider: host: \"https://...\" access_token: \"...\"",
    "description": "",
    "tags": null,
    "title": "Bitbucket",
    "uri": "/commands/plugin/bitbucket/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Git commands Usage: ply git [command] Available Commands: install-hooks install git hooks from cloud config Flags: --cloud-sync force cloud sync -h, --help help for git -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --json turn on json output logging Use \"ply git [command] --help\" for more information about a command.Example usage plybuild git install-hooks",
    "description": "",
    "tags": null,
    "title": "Git",
    "uri": "/commands/plugin/git/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Dependencies Some of these commands depends on:\nktlint Help Linting commands Usage: ply lint [command] Available Commands: kotlin uses ktlint for linting kotlin code Flags: -h, --help help for lint -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --json turn on json output logging Use \"ply lint [command] --help\" for more information about a command.Example usage plybuild lint",
    "description": "",
    "tags": null,
    "title": "Lint",
    "uri": "/commands/plugin/lint/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Dependencies Some of these commands depends on:\nmvn dot (graphviz) Help Run maven (mvn) commands Usage: ply maven [command] Available Commands: analyze Perform an analyze on a projects boot-run runs a spring boot application checkstyle runs checkstyle enforcer runs enforcer owasp runs owasp Flags: -h, --help help for maven -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Global Flags: --debug turn on debug output --json turn on json output logging Use \"ply maven [command] --help\" for more information about a command.Graphing plybuild supports graphing of dependencies through the maven plugin: https://github.com/ferstl/depgraph-maven-plugin\ncreates a graph for dependencies in a project Usage: plybuild maven graph [flags] plybuild maven graph [command] Available Commands: 2party creates a graph only for 2party dependencies in a project Flags: --exclude-filters stringArray exclude filter rules --exclude-test-scope exclude test scope from graph -h, --help help for graph --include-filters stringArray include filter rules Global Flags: --debug turn on debug output -r, --recursive turn on recursive mode --target string optional target directory (default \".\") Use \"plybuild maven graph [command] --help\" for more information about a command.Graph filters By default, no filters are applied to the graph. However, both exclude and include filter are supported. Both of these filers are proxies for the filters supported by the plugin: https://github.com/ferstl/depgraph-maven-plugin/wiki/Filtering\nplybuild maven graph --include-filters=\"org.springframework*\" --include-filters=\"org.jetbrains*\"plybuild maven graph --exclude-filters=\"org.springframework*\" --exclude-filters=\"org.jetbrains*\"Graph style Before generating the graph a style definition file is placed in target/dependency-graph-styles.json. This file is generated with the following defaults (“com.example*” is replaced with the actual groupId of the project):\n{ \"node-styles\": { \",,test\": { \"type\": \"box\", \"color\": \"#d2d2d2\", \"fill-color\": \"#d3d3d3\", \"style\": \"filled,rounded\" }, \"com.example*\": { \"type\": \"box\", \"color\": \"#95ca7d\", \"fill-color\": \"#79B4B7\", \"style\": \"filled,rounded\" }, \"org.jetbrains*\": { \"type\": \"box\", \"color\": \"#F9C5D5\", \"fill-color\": \"#FEE3EC\", \"style\": \"filled,rounded\" }, \"org.springframework*\": { \"type\": \"box\", \"color\": \"#95ca7d\", \"fill-color\": \"#b4d4a1\", \"style\": \"filled,rounded\" } } }If the file already exists in the target folder, it will not be overwritten. More information on this file is found at: https://github.com/ferstl/depgraph-maven-plugin/wiki/Styling\n",
    "description": "",
    "tags": null,
    "title": "Maven",
    "uri": "/commands/plugin/maven/index.html"
  },
  {
    "breadcrumb": "plybuild \u003e  2. Commands \u003e Plugin",
    "content": "Help Query dependencies in a project Usage: ply query [flags] Flags: -a, --artifactId string artifactId -g, --groupId string groupId -h, --help help for query --target string Optional target directory (default \".\") Global Flags: --debug turn on debug output --json turn on json output loggingExample usage plybuild query",
    "description": "",
    "tags": null,
    "title": "Query",
    "uri": "/commands/plugin/query/index.html"
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
    "breadcrumb": "plybuild",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
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
    "breadcrumb": "plybuild",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
