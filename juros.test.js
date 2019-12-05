const juros = require('./juros')

test('jurosSimples', () =>{
    const C = 1000
    const i = 0.0035
    const t = 10
    const calJurosSimples = 35
    expect(juros.jurosSimples(C, i, t)).toBe(calJurosSimples)
})
test('jurosSimples when t=0', () =>{
    const C = 1000
    const i = 0.0035
    const t = 0
    const calJurosSimples = 0
    expect(juros.jurosSimples(C, i, t)).toBe(calJurosSimples)
})
test('jurosSimples at 10%', () =>{
    const C = 1000
    const i = 0.1
    const t = 1
    const calJurosSimples = 100
    expect(juros.jurosSimples(C, i, t)).toBe(calJurosSimples)
})
test('montante', () =>{
    const C = 1000
    const i = 0.0035
    const t = 10
    const expectedMontante = 1035
    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 35)
    const montante = juros.pure.montante({jurosSimples})
    const m = montante(C, i, t)
    expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
    expect(m).toBe(expectedMontante)
})

test('montanteJurosCompostos', () =>{
    const C = 1000
    const i = 0.0035
    const t = 10
    const expectedJuros = 1035.56
    const jurosCalc = parseFloat(juros.montanteJurosCompostos(C, i, t).toFixed(2))
    expect(jurosCalc).toBe(expectedJuros)
})

test('jurosCompostos', () =>{
    const C = 1000
    const i = 0.0035
    const t = 10
    const expectedJurosCompostos = 35.56
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => 1035.56)
    const jurosCompostos = juros.pure.jurosCompostos({montanteJurosCompostos})
    const jurosCalc = parseFloat(jurosCompostos(C, i, t).toFixed(2))
    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
    expect(jurosCalc).toBe(expectedJurosCompostos)
})
