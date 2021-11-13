package academy.devdojo.maratonajava.introducao;

import java.sql.SQLOutput;

public class Aula02TipoPrimitivos {
    public static void main(String[] args) {
        // tipos primitivos int, float, char, byte, short, long, boolean
        int idade = 10;
        long numeroGrande = 100000;
        double salarioDouble = 2000;
        float salarioFloat = 2500;
        byte idadeByte = 10;
        short idadeShort = 10;
        boolean verdadeiro = true;
        boolean falso = false;
        char caractere = '\u0041';
        String nome = "pode colocar um grande texto";


        System.out.println("A idade é "+idade+" anos");
        System.out.println(falso);
        System.out.println("char "+ caractere);
        System.out.println(numeroGrande);
        System.out.println("Oi meu nome é " +nome);
    }
}
