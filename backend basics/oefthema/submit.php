<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>submit</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>
<body>
    <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $location = $_POST['locations'];

        // print_r($_POST);
        function saveStringToFile($name, $email, $tel, $location) {
            // open or create a new file and append to it
            $file = fopen("bookings.csv", "a");
            // provice a prefered format for the date object
            $currendate = date('Y-m-d H:i:s');
            // write to file and close... use "\r\n" for new line
            $string = $currendate . ",".$name . ",". $tel . "," . $email . ",". $location."\r";
            fwrite($file, $string);
            fclose($file);
        }
        
        saveStringToFile($name, $email, $tel, $location);
    ?>

    <h1 class="mt-2">Thank you for your registration, <?php echo $name ?></h1>
    <h3 class="mt-2">We expect you in <?php echo $location ?></h3>
    <p class="mt-2">here are the info you have given us:</p>
    <ul>
        <li>Name: <?php echo $name ?></li>
        <li>Email: <?php echo $email ?></li>
        <li>Tel: <?php echo $tel ?></li>
        <li>Location: <?php echo $location ?></li>
    </ul>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>