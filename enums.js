var AppStatus;
(function (AppStatus) {
    AppStatus[AppStatus["NotStarted"] = 0] = "NotStarted";
    AppStatus[AppStatus["InDevelopment"] = 1] = "InDevelopment";
    AppStatus[AppStatus["Deployed"] = 2] = "Deployed";
})(AppStatus || (AppStatus = {}));
var AppEnvironments;
(function (AppEnvironments) {
    AppEnvironments["Dev"] = "Development";
    AppEnvironments["Test"] = "Test";
    AppEnvironments["Prod"] = "Production";
})(AppEnvironments || (AppEnvironments = {}));
var currentApp = {
    Status: AppStatus.Deployed,
    Environment: AppEnvironments.Prod
};
console.log(currentApp);
