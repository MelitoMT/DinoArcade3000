//doc configuración

$vinculo = mysqli_connect("localhost","usuario","contrasena","nombrebase");

if(!$vinculo)//Comprueba si la conexión se efectuó
{
  echo mysqli_connect_error();
  echo mysqli_connect_errno();
  exit();
}
else
{
  echo "Conectada correctamente";
}
