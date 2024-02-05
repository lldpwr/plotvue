
function Counter(props) {
    return {
        $template: '#counter-template',
        count: props.initialCount,
        inc() {
            this.count++
        }
    }
}
