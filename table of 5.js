<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table of 5</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
        }
        table {
            margin: 50px auto;
            border-collapse: collapse;
            width: 50%;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        th, td {
            padding: 15px;
            text-align: center;
            border: 1px solid #ddd;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        td {
            font-size: 18px;
        }
    </style>
</head>
<body>

    <h1>Multiplication Table of 5</h1>
    <table id="multiplication-table">
        <thead>
            <tr>
                <th>Number</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <script>
        // JavaScript to populate the multiplication table of 5
        const tableBody = document.querySelector('#multiplication-table tbody');
        
        for (let i = 1; i <= 10; i++) {
            const row = document.createElement('tr');
            const numberCell = document.createElement('td');
            const resultCell = document.createElement('td');
            
            numberCell.textContent = `5 x ${i}`;
            resultCell.textContent = 5 * i;
            
            row.appendChild(numberCell);
            row.appendChild(resultCell);
            tableBody.appendChild(row);
            
          
        }
    </script>

</body>
</html>
