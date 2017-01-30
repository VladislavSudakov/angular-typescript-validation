import {ValidationConfig} from './src/config/validationConfig';
import {ValidatableController} from './src/controllers/validatableController';
import {ValidationCore} from './src/core/validationCore';
import {RulesCustomizer} from './src/customizer/rulesCustomizer';
import {ValidatableFieldDirective} from './src/directives/validatableField/validatableField';
import {ValidationMessageDirective} from './src/directives/validationMessage/validationMessage';
import {InitValidationModuleProvider} from './src/init/initValidationModuleProvider';
import {IMessage} from './src/interfaces/message';
import {IRulesCustomizer} from './src/interfaces/rulesCustomizer';
import {IValidationRule} from './src/interfaces/validationRule';
import {IValidator} from './src/interfaces/validator';
import {ServerError} from './src/models/serverError';
import {ErrorProcessor} from './src/utils/errorProcessor';
import {ValidationUtilities} from './src/utils/validationUtilities';

// export everything that you want to access directly in TS code outside the package
export {
    ValidationConfig,
    ValidatableController,
    ValidationCore,
    RulesCustomizer,
    ValidatableFieldDirective,
    ValidationMessageDirective,
    InitValidationModuleProvider,
    IMessage,
    IRulesCustomizer,
    IValidationRule,
    IValidator,
    ServerError,
    ErrorProcessor,
    ValidationUtilities
}
