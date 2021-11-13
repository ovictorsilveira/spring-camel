package academy.devdojo.maratonajava.introducao;

public class Aula05EstruturasCondicionais {
    public static void main(String[] args) {

        int idade = 24;
        boolean isAutorizadoAComprar = idade >= 18;

        if(isAutorizadoAComprar != false ){
            System.out.println("autorizado a comprar bebida");
        }else{
            System.out.println("Não autorizado a comprar bebida alcolica");
        }
        if(!isAutorizadoAComprar){
            System.out.println("não autorizado");
        }
    }
}
