{
  "excludes" : [
    ".classpath",
    ".project",
    {{#has technologies 'springboot_web'}}
    "src/main/java/application/rest/HealthEndpoint.java",
    "src/main/java/application/rest/JaxrsApplication.java",
    "src/test/java/it/HealthEndpointIT.java"
    {{/has}}
  ],
  "excludesDir" : [
    "target",
    ".settings",
    "build"
  ],
  "composition" : [
    "build",
    {{#each technologies}}
    "technologies/{{this}}",
    {{/each}}
  ]
}
