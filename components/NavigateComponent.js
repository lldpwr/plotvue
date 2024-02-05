
function Navigate(props) {
    return {
        $template: '#navigate-template',
        currentRoute: props.currentRoute,
        navigate(to) {
            console.log("navigate(" + to + ")");
            window.history.pushState({}, '', to);
            this.currentRoute = to;
        }
    }
}
