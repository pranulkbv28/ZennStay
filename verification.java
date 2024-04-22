import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class verification {
    public static void main(String[] args) {
        // String filePath = "C:\Users\prana\Downloads\LSMAuth";
        String filePath = "C:/Users/prana/OneDrive/Desktop/pincode.txt";
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your PIN code: ");
        String userPIN = sc.nextLine();

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            int lineCount = 0;
            while ((line = reader.readLine()) != null && lineCount < 2) {
                String linex = line.replaceAll("\\s","");
                if (linex.equals(userPIN)) {
                    System.out.println("Verified!");
                    break; 
                }
                else {
                    System.out.println("Pincode does not match!");
                }
                lineCount++;
            }

            if (lineCount >= 2) {
                System.out.println("PIN code not found. Contact admin");
            }
        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
    }
}