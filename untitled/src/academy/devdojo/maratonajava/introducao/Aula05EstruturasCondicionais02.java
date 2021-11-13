package academy.devdojo.maratonajava.introducao;

public class Aula05EstruturasCondicionais02 {
    public static void main(String[] args) {
        int idade = 45;
        String categoria;

        if (idade < 15){
           categoria = ("categoria infantil");
        } else if (idade >= 15 && idade < 18){
            categoria = ("categoria juvenil");
        } else {
            categoria = ("categoria adulto");
        }
        System.out.println(categoria);
    }
}
