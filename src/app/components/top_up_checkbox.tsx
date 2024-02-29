import { Checkbox } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

export default function TopUpCheckbox() {
    return (
        <div className="flex flex-col">
        <Checkbox color="green" />
        <Text>Automatically Top Up My Safe Account</Text>
        </div>
    );
}

