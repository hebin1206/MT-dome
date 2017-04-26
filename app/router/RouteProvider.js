class RouteProvider {
    constructor () {
        this.route = {};
    }

    register (state) {
        let self = this;
        Object.keys(state).forEach(function (key) {
            self.route[key] = state[key];
            self.route[key].key = key;
        });
    }

    getRouteComponent (route) {
        return route && route.id ? this.route[route.id] : null;
    }
}

export default new RouteProvider();
