import { Checkbox } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";

export default function TopUpCheckbox() {
    return (
        <div className="flex justify-between">
            <Checkbox color="green" />
            <Text color="green" size="2" weight="bold">Automatically Top Up My Safe Account</Text>
        </div>
    );
}
