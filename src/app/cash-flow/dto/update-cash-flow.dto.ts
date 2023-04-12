import { PartialType } from '@nestjs/mapped-types'
import { CashFlowOperation } from 'src/app/util/enum/cash-flow-operation.enum'
import { CreateCashFlowDto } from './create-cash-flow.dto'

export class UpdateCashFlowDto extends PartialType(CreateCashFlowDto) {
	value: number
	operation: CashFlowOperation
	clientId: number
}
