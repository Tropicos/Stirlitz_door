// функция расчёта
function func() {
    // переменные для вычислений
    let centipede = 40
    let octopus = 8
    let muller = 1
    let i = 0
    let j = 0
    let k = 0
    // переменная для результата
    let result = 1;
    // получаем кол-во стуков
    let quantity = Number(document.getElementById("quantity").value);
    // функция для подсчёта комбинаций:
    if (quantity >= octopus + centipede) {
        result = result - 1;
        i = centipede;
        while (i <= quantity) {
            i = i + centipede;
            j = j + 1;
        }
        while (k <= j) {
            i = octopus;
            while (i <= quantity - centipede * k) {
                i = i + octopus;
                result = result + 1;
            }
            k = k + 1;
            result = result + 1;
        }

    } else {
        if (quantity >= centipede) {
            i = centipede;
            while (i <= quantity) {
                i = i + centipede;
                result = result + 1;
            }
        }

        if (quantity >= octopus) {
            i = octopus;
            while (i <= quantity) {
                i = i + octopus;
                result = result + 1;
            }
        }
        else if (quantity >= muller) {
            document.getElementById("result").innerHTML = result.toString();
        } else {
            result = result - 1;
            document.getElementById("result").innerHTML = result.toString();
        }
    }

    // console.log(result)
    document.getElementById("result").innerHTML = result.toString();
}