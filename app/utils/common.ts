import UserSource from "../pages/dashboard/users.vue?raw";
import ApiCallsSource from "../pages/dashboard/api-calls.vue?raw";
import StoreManagmentSource from "../pages/dashboard/store-management.vue?raw";
import AmazonWebServicesSource from "../pages/dashboard/amazon-web-services.vue?raw";

export const usersTable: string[] = ["Username", "Email", "Password", "Permissions"];

export const subModules = [
    {
        name: "Users",
        route: "users",
        source: UserSource
    },
    {
        name: "Api Calls",
        route: "api-calls",
        source: ApiCallsSource
    },
    {
        name: "Store Management",
        route: "store-management",
        source: StoreManagmentSource,
    },
    {
        name: "Amazon Web Services",
        route: "amazon-web-services",
        source: AmazonWebServicesSource
    }
];