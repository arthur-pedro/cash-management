"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_config_1 = require("./config/database/typeorm.config");
const users_module_1 = require("./app/users/users.module");
const cash_flow_module_1 = require("./app/cash-flow/cash-flow.module");
const cash_module_1 = require("./app/cash/cash.module");
const client_module_1 = require("./app/client/client.module");
const auth_module_1 = require("./app/auth/auth.module");
const auth_middleware_1 = require("./middleware/auth.middleware");
const users_controller_1 = require("./app/users/users.controller");
const client_controller_1 = require("./app/client/client.controller");
const cash_controller_1 = require("./app/cash/cash.controller");
const cash_flow_controller_1 = require("./app/cash-flow/cash-flow.controller");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes(users_controller_1.UsersController, client_controller_1.ClientController, cash_controller_1.CashController, cash_flow_controller_1.CashFlowController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            users_module_1.UsersModule,
            cash_flow_module_1.CashFlowModule,
            cash_module_1.CashModule,
            client_module_1.ClientModule,
            auth_module_1.AuthModule,
            passport_1.PassportModule,
            jwt_1.JwtModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map