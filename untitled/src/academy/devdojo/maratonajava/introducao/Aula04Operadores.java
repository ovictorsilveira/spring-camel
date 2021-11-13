package academy.devdojo.maratonajava.introducao;

import javax.swing.*;

public class Aula04Operadores {
    public static void main(String[] args) {
        int numero01 = 10;
        int numero02 = 20;
        int resultado = numero01 * numero02;
        System.out.println(resultado);

        int resto = 21 % 7;
        System.out.println(resto);

        boolean dezMaiorVinte = 10 > 20;
        boolean dezMenorVinte = 10 < 20;
        boolean dezIgualVinte = 10 == 20;
        boolean dezDiferentdez = 10 != 10;

        System.out.println("10 > 20" + dezMaiorVinte);
        System.out.println("10 < 20" + dezMenorVinte);
        System.out.println("10 = 20" + dezIgualVinte);
        System.out.println("10 diferente 10" + dezDiferentdez);

        int idade = 24;
        float salario = 3500F;
        boolean maiorIdade = idade > 18 && salario >= 4612;
        boolean menorIdade = idade < 18 && salario >= 3000;
        System.out.println("maiorIdade" + maiorIdade);
        System.out.println("menorIdade" + menorIdade);

        double valorTotalContaCorrente = 200;
        double valorTotalContaPoupanca = 10000;
        float valorPlaystation = 5000F;
        boolean isPlaystationCincoCompravel = valorTotalContaCorrente > valorPlaystation || valorTotalContaPoupanca > valorPlaystation;
        System.out.println("isPlaystationCincoCompravel"+ isPlaystationCincoCompravel);

        double bonus = 1800;
        bonus += 1000;//2800
        bonus -= 1000;//800
        bonus *= 2;
        bonus /= 2;
        bonus %= 2;

        int contador = 0;
        contador += 1;
        System.out.println(contador);
    }
}
