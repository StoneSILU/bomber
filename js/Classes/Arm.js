define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Arm = /** @class */ (function () {
        function Arm() {
        }
        Arm.prototype.setPosition = function (newPosition) {
            this.position = newPosition;
        };
        Arm.prototype.setName = function (name) {
            this.name = name;
        };
        Arm.prototype.setDamage = function (damage) {
            this.damage = damage;
        };
        return Arm;
    }());
    exports.Arm = Arm;
});
