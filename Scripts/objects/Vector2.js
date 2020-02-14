"use strict";
var objects;
(function (objects) {
    class Vector2 {
        // CONSTRUCTOR
        constructor(x = 0, y = 0) {
            // PRIVATE INSTANCE MEMBERS
            this._x = 0;
            this._y = 0;
            this._magnitude = 0;
            this._sqrMagnitude = 0;
            this.x = x;
            this.y = y;
            this.sqrMagnitude = this.x * this.x + this.y * this.y;
            this.magnitude = Math.sqrt(this.sqrMagnitude);
        }
        // PUBLIC PROPERTIES
        get x() {
            return this._x;
        }
        set x(newX) {
            this._x = newX;
        }
        get y() {
            return this._y;
        }
        set y(newY) {
            this._y = newY;
        }
        get magnitude() {
            return this._magnitude;
        }
        set magnitude(newMagnitude) {
            this._magnitude = newMagnitude;
        }
        get sqrMagnitude() {
            return this._sqrMagnitude;
        }
        set sqrMagnitude(newSqrMagnitude) {
            this._sqrMagnitude = newSqrMagnitude;
        }
        get normalized() {
            let vector2 = new Vector2(this.x, this.y);
            vector2.normalize();
            return vector2;
        }
        //PRIVATE METHODS
        // PUBLIC METHODS
        add(rhs) {
            this.x += rhs.x;
            this.y += rhs.y;
        }
        subtract(rhs) {
            this.x -= rhs.x;
            this.y -= rhs.y;
        }
        scale(scalar) {
            this.x *= scalar;
            this.y *= scalar;
        }
        normalize() {
            let magnitude = this.magnitude;
            if (magnitude > 9.99999974737875E-06) {
                this.x = this.x / magnitude;
                this.y = this.y / magnitude;
            }
            else {
                this.x = 0;
                this.y = 0;
            }
        }
        // PUBLIC STATIC METHODS
        static zero() {
            return new Vector2(0, 0);
        }
        static one() {
            return new Vector2(1, 1);
        }
        static up() {
            return new Vector2(0, -1);
        }
        static down() {
            return new Vector2(0, 1);
        }
        static left() {
            return new Vector2(-1, 0);
        }
        static right() {
            return new Vector2(1, 0);
        }
        static dot(lhs, rhs) {
            return lhs.x * rhs.x + lhs.y * rhs.y;
        }
        /**
         * Returns the Pythogorean distance between P1 and P2
         *
         * @static
         * @param {Vector2} p1
         * @param {Vector2} p2
         * @returns {number}
         * @memberof Vector2
         */
        static distance(p1, p2) {
            let Xs = (p2.x - p1.x);
            let Ys = (p2.y - p1.y);
            return Math.sqrt(Xs * Xs + Ys * Ys);
        }
        /**
         * Returns the Squared distance between P1 and P2
         *
         * @static
         * @param {Vector2} p1
         * @param {Vector2} p2
         * @returns {number}
         * @memberof Vector2
         */
        static sqrDistance(p1, p2) {
            let Xs = (p2.x - p1.x);
            let Ys = (p2.y - p1.y);
            return Xs * Xs + Ys * Ys;
        }
        static subtract(lhs, rhs) {
            let dx = lhs.x - rhs.x;
            let dy = lhs.y - rhs.y;
            return new Vector2(dx, dy);
        }
    }
    objects.Vector2 = Vector2;
})(objects || (objects = {}));
//# sourceMappingURL=Vector2.js.map