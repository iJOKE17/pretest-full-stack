var param = null
const passingParamIndex = 2
const funds = {
    'B-INCOMESSF': 10.0548,
    'BM70SSF': 9.9774,
    'BEQSSF': 11.247,
    'B-FUTURESSF': 11.443
}
process.argv.forEach((val, index) => {
    if (index === passingParamIndex) {
        param = val
    }
});

try {
    console.log(funds[param])
} catch (error) {
    console.error('Params not found in list')
}