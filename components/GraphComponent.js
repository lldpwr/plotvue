
function Graph(props) {
    return {
        $template: '#graph-template',
        id: props.id,
        data: props.data,
        layout: props.layout,
        initialized:false,
        mounted() {
            Plotly.newPlot(this.id, this.data, this.layout);
            console.log("Plotly.newPlot(" );
            // console.log("Plotly.newPlot(" + this.id + ", " + this.data + ", " + this.layout + ");");
            this.initialized = true;
            document.getElementById(this.id).on('plotly_click', (data) => {
                // Check if Series 2 was clicked
                console.log(data.points);
                if (data.points[0].data.name === 'Series 2') {
                    // Open a link
                    // window.open('https://www.example.com', '_blank');
                    // console.log(data.points[0]);
                    console.log(this.id);
                }
            });
        }
    }
}
