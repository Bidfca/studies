
import java.util.Arrays;
import java.util.List;

class PensarResponder {
    public static void main(String[ ] args) {
       List<String> objetos = Arrays.asList("garrafa", "copo");
        for (int tam = objetos.size() - 1; tam >= 0; tam--) {
            System .out.print(objetos.get(tam) + ",");
        }
    }
}