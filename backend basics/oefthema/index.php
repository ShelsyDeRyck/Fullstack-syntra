<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>themadag</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-md">
                <!-- http://localhost/oefthema/index.php?name=marosch&email=test@test.com&tel=0000&loc=italy -->
            
                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, tenetur adipisci. Hic,
                    eum, explicabo aliquid sapiente fugiat nobis porro enim possimus soluta perspiciatis in doloremque
                    quis quo dignissimos, eligendi ducimus!</p>
                <form action="submit.php" method="post">
                    <input class="form-control mt-2" type="text" name="name" placeholder="name" value="<?php if (isset($_GET['name']))
                        echo $_GET['name'] ?>">
                        <br>
                        <input class="form-control mt-2" type="text" name="email" placeholder="email" value="<?php if (isset($_GET['email']))
                        echo $_GET['email'] ?>">
                        <br>
                        <input class="form-control mt-2" type="text" name="tel" placeholder="tel" value="<?php if (isset($_GET['tel']))
                        echo $_GET['tel'] ?>">
                        <br>
                        <hr>
                <?php
                    $locations = array('Genk - Thailand', 'Hasselt - Greece', 'Zonhove - Mexico', 'Oudsbergen - Italy');
                    $locationName = '';
                    echo '<select class="form-select mt-2" name="locations">';
                    if (isset($_GET['loc'])) {
                        foreach ($locations as $location) {
                            // echo strtolower(explode(' - ', $location)[1]);
                            // echo $_GET['loc'];
                            if (strtolower(explode(' - ', $location)[1]) === strtolower($_GET['loc'])) {
                                echo '<option value="' . $location . '" selected>' . $location . '</option>';
                            } else {
                                echo '<option value="' . $location . '"disabled>' . $location . '</option>';
                            }
                        }
                    } else {
                        foreach ($locations as $location) {
                            echo '<option value="' . $location . '">' . $location . '</option>';
                        }
                    }

                    echo '</select>';


                ?>
                    <hr>

                    <input class="btn btn-primary" type="submit">
                    <input class="btn btn-secondary" type="reset">
                </form>

            </div>
        </div>
    </div>


    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Validate and sanitize the input
        // $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
        // $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
        // $tel = isset($_POST['tel']) ? (int)$_POST['tel'] : '';
    
        // // Display the input
        // echo "Name: " . $name . "<br>";
        // echo "Email: " . $email . "<br>";
        // echo "Tel: " . $tel . "<br>";
    }
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
</body>

</html>