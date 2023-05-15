"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItems = void 0;
const typeorm_1 = require("typeorm");
const carts_entity_1 = require("./carts.entity");
let CartItems = class CartItems {
};
__decorate([
    typeorm_1.Column({ type: 'uuid' }),
    __metadata("design:type", String)
], CartItems.prototype, "product_id", void 0);
__decorate([
    typeorm_1.Column({ type: 'integer' }),
    __metadata("design:type", String)
], CartItems.prototype, "count", void 0);
__decorate([
    typeorm_1.OneToMany(() => carts_entity_1.Carts, (cart) => cart.id),
    typeorm_1.JoinColumn({ name: 'id', referencedColumnName: 'cart_id' }),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], CartItems.prototype, "cart_id", void 0);
CartItems = __decorate([
    typeorm_1.Entity()
], CartItems);
exports.CartItems = CartItems;
//# sourceMappingURL=cart-items.entity.js.map