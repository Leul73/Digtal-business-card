import java.util.HashMap;
import java.util.Map;

public class DigitalBusinessCard {

    private String name;
    private String email;
    private String phoneNumber;
    private String telegramHandle;
    private String instagramHandle;
    private String companyName = "Quantum Business Empire";

    public DigitalBusinessCard(String name, String email, String phoneNumber, String telegramHandle, String instagramHandle) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.telegramHandle = telegramHandle;
        this.instagramHandle = instagramHandle;
    }

    public Map<String, String> generateCardDetails() {
        Map<String, String> cardDetails = new HashMap<>();
        cardDetails.put("name", this.name);
        cardDetails.put("email", this.email);
        cardDetails.put("phoneNumber", this.phoneNumber);
        cardDetails.put("telegramHandle", this.telegramHandle);
        cardDetails.put("instagramHandle", this.instagramHandle);
        cardDetails.put("companyName", this.companyName);

        return cardDetails;
    }

    public String getCardJson() {
        // Convert card details to JSON string (simplified version)
        return "{ \"name\": \"" + name + "\", \"email\": \"" + email + "\", \"phoneNumber\": \"" + phoneNumber +
                "\", \"telegramHandle\": \"" + telegramHandle + "\", \"instagramHandle\": \"" + instagramHandle + "\", \"companyName\": \"" + companyName + "\" }";
    }

    // Example method to handle user sharing the card
    public String handleShareRequest() {
        // Logic for processing share requests, e.g., logging or sending notifications
        return "Business card shared successfully!";
    }

    // Additional business logic can be added here as needed
}