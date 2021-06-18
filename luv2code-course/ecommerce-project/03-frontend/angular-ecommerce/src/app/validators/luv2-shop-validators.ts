import { FormControl, ValidationErrors } from "@angular/forms";

/**
 * Custom Form Validators
 */
export class Luv2ShopValidators {

    // Whitespace validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        // Check if the string only contains whitespaces
        if ((control.value != null) && (control.value.trim().length === 0)) {
            // Invalid -> Return error object
            return { 'notOnlyWhitespace' : true };
        }
        else {
            // Valid -> Return null
            return null;
        }
    }
}
