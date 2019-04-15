// particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

console.log(results);
classes = ["battery", "value", "fingerprint", "sound", "picture"];
labels = ['pos','neu','neg'];
all = results['all'];
battery = results['battery'];
value = results['value'];
fingerprint = results['fingerprint'];
sound = results['sound'];
picture = results['picture'];

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgba(" + x + "," + y + "," + z + ", 1.0)";
    return bgColor;
}

function renderChart(id, data, labels) {
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        labels: labels,
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    random_bg_color(),
                    random_bg_color(),
                    random_bg_color(),
                    random_bg_color(),
                    random_bg_color(),
                ],
            }]
        },
        options: {
            title: {
                display: true,
                text: id
            }
        }
    });
}

renderChart('main_chart', all, classes);
renderChart('battery_chart', battery.slice(1,), labels);
renderChart('value_chart', value.slice(1,), labels);
renderChart('fingerprint_chart', fingerprint.slice(1,), labels);
renderChart('sound_chart', sound.slice(1,), labels);
renderChart('picture_chart', picture.slice(1,), labels);
