<!DOCTYPE html>      
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TDD: Invertir Texto</title>
        <style>
            * {
                border: 1px solid red;
            }
            body {
                font-family: Arial, Helvetica, sans-serif;
                padding: 20px;
            }
            .pass {
                color: green;
            }
            .fail {
                color: red;
            }
            pre {
                background-color: white; 
                padding: 10px; 
                border-radius: 5px;
            }
        </style>
    </head>
<body>
    <h1>Testing: Invertor texto</h1>
    <div id="result"></div>
    <script>
        // función bajo prueba
        function invertirtexto(texto) {
            if (typeof texto !== "string") return "";
            return texto.split("").reverse().join("");
        }

        // sistema de test simple
        function expect(actual) {
            return {
                toBe(expected) {
                    const passed = actual === expected;
                    const message = passed ?
                        `paso: ${actual} === ${expected}` :
                        `fallo: ${actual} !== ${expected}`;

                    const result = document.createElement("pre");
                    result.textContent = message;
                    result.className = passed ? "pass" : "fail";
                    document.getElementById("result").appendChild(result);
                }
            }
        }

        // prueba
        expect(invertirtexto("hola")).toBe("aloh");
        expect(invertirtexto("TDD")).toBe("DDT");
        expect(invertirtexto("123ABC")).toBe("CBA321");
        expect(invertirtexto("123")).toBe("321");
        expect(invertirtexto("a")).toBe("a");
    </script>
</body>
</html>
