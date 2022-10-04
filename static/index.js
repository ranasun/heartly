new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    vuetify: new Vuetify(),
    data: () => ({
        drawer: true,
        loader: false,
        input: {
            'BMICategory': 0,
            'Smoking': 0,
            'AlcoholDrinking': 0,
            'Stroke': 0,
            'PhysicalHealth': 0,
            'MentalHealth': 0,
            'DiffWalking': 0,
            'Sex': 0,
            'AgeCategory': 0,
            'Race': 0,
            'Diabetic': 0,
            'PhysicalActivity': 0,
            'GenHealth': 0,
            'SleepTime': 0,
            'Asthma': 0,
            'KidneyDisease': 0,
            'SkinCancer': 0,
        },
        result: null,
        BMICategory: [{
            label: 'Underweight (BMI < 18.5)',
            value: 0
        }, {
            label: 'Normal weight (18.5 <= BMI < 25.0)',
            value: 1
        }, {
            label: 'Overweight (25.0 <= BMI < 30.0)',
            value: 2
        }, {
            label: 'Obese (30.0 <= BMI < +Inf)',
            value: 3
        }],
        Smoking: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
        AlcoholDrinking: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
        Stroke: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
        PhysicalHealth: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        MentalHealth: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        DiffWalking: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
        Sex: [{
            label: 'Male',
            value: 1
        }, {
            label: 'Female',
            value: 0
        }],
        AgeCategory: [{
            label: '18-24',
            value: 0
        }, {
            label: '25-29',
            value: 1
        }, {
            label: '30-34',
            value: 2
        }, {
            label: '35-39',
            value: 3
        }, {
            label: '40-44',
            value: 4
        }, {
            label: '45-49',
            value: 5
        }, {
            label: '50-54',
            value: 6
        }, {
            label: '55-59',
            value: 7
        }, {
            label: '60-64',
            value: 8
        }, {
            label: '65-69',
            value: 9
        }, {
            label: '70-74',
            value: 10
        }, {
            label: '75-79',
            value: 11
        }, {
            label: '80 or older',
            value: 12
        }],
        Race: [{
            label: 'American Indian/Alaskan Native',
            value: 0
        }, {
            label: 'Asian',
            value: 1
        }, {
            label: 'Black',
            value: 2
        }, {
            label: 'Hispanic',
            value: 3
        }, {
            label: 'White',
            value: 4
        }, {
            label: 'Other',
            value: 5
        }],
        Diabetic: [{
            label: 'No',
            value: 0
        }, {
            label: 'No, borderline diabetes',
            value: 1
        }, {
            label: 'Yes (during pregnancy)',
            value: 2
        }, {
            label: 'Yes',
            value: 3
        }],
        PhysicalActivity: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
        GenHealth: [{
            label: 'Excellent',
            value: 0
        }, {
            label: 'Very good',
            value: 1
        }, {
            label: 'Good',
            value: 2
        }, {
            label: 'Fair',
            value: 3
        }, {
            label: 'Poor',
            value: 4
        }],
        SleepTime: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        Asthma: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
        KidneyDisease: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
        SkinCancer: [{
            label: 'Yes',
            value: 1
        }, {
            label: 'No',
            value: 0
        }],
    }),
    methods: {
        predictHeartDisease() {
            const vm = this;
            vm.loader = true;
            const input = Object.values(this.input);

            axios.post('/heartly/predict', {
                    input: input
                })
                .then(({
                    data
                }) => {
                    var risk = [{
                        type: "pie",
                        values: data,
                        labels: ["No Heart Disease", "Heart Disease"],
                        textinfo: "label+percent",
                        hoverinfo: 'label+percent',
                        textposition: 'outside',
                        marker: {
                            colors: ['#1ECBE1', '#E1341E']
                        },
                        hole: .4,
                    }]

                    var layout = {
                        showlegend: false,
                        title: `You have a ${parseFloat(data[1]*100).toFixed(2)}% chance of developing a heart disease.`,
                    }

                    Plotly.newPlot('result', risk, layout)
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    vm.loader = false
                });
        },
    },
})