define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pos = /** @class */ (function () {
        function Pos(y, x) {
            this.x = x;
            this.y = y;
        }
        Pos.prototype.getPosition = function () {
            return { x: this.x, y: this.y };
        };
        return Pos;
    }());
    exports.Pos = Pos;
});
