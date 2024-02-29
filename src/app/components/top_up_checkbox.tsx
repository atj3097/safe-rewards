import { Checkbox } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

export default function TopUpCheckbox() {
    return (
        <div className="flex flex-col">
        <Checkbox color="green" />
        <Text> Top Up Your Safe Account</Text>
        </div>
    );
}

