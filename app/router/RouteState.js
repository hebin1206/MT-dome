import React from 'react';

class RouteState {
    set navigator (navigator) {
        this._navigator = navigator;
    }

    get navigator() {
        return this._navigator;
    }

    canBack () {
        if (!this._navigator || !this._navigator.state || this._navigator.state.presentedIndex <= 0) {
            return false;
        }

        let route = this._navigator.state.routeStack[this._navigator.state.presentedIndex];
        return route && route.__type != 'reset';
    }

    goto (routeParams, clearHistory = false) {
        if (!this._navigator) {
            return false;
        }
        if (clearHistory) {
            this._navigator.pushToTop({...routeParams, __type: 'reset'});
        } else {
            this._navigator.push(routeParams);
        }
        return null;
    }

    goBack () {
        if (!this._navigator) {
            return false;
        }

        return this._navigator.pop();
    }

    backToTop () {
        if (!this._navigator)
            return false;

        return this._navigator.popToTop();
    }
}

export default new RouteState();
