import { PageHeaderProps } from "../utils/interfaces"
import BackButton from "./BackButton"

export default function PageHeader({title, subtitle}: PageHeaderProps) {
    return (
        <div className="page-header">
            <div className="back-button">
                <BackButton />
            </div>
            <div className="text">
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
            </div>
    </div>
    )
}
