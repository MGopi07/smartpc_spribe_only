import React from "react";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";
import { formatCurrency } from "../../utils/formatCurrency";

interface CashOutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount: number;
}

export const CashOutModal: React.FC<CashOutModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  amount,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="390px">
      <div className="modal-body p-4 text-center">
        {/* Step Pill */}
        <div className="step-pill-box justify-content-center mb-3">
          <span className="pill-text fw-bold">Cash Out Confirmation</span>
        </div>

        {/* Inner Indented Cash Out Panel */}
        <div
          className="inner-cashout-panel p-3 rounded mb-3"
          style={{
            background: "radial-gradient(circle at 50% 0%, #190F09 0%, #140D08 50%, #0C0805 100%)",
            border: "1.5px solid rgba(245, 131, 31, 0.5)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(245, 131, 31, 0.15)",
          }}
        >
          <div className="cashout-icon-glow mb-2">
            <i className="fa-solid fa-coins fs-3" style={{ color: "#FF9431" }}></i>
          </div>
          <h3 className="panel-heading mb-1" style={{ color: "#FF9431", textShadow: "0 0 12px rgba(245, 131, 31, 0.5)" }}>
            Cash Out
          </h3>
          <p className="panel-label text-secondary small text-uppercase mb-1" style={{ fontSize: "0.72rem" }}>
            Available Shop Balance
          </p>
          <div className="panel-amount fs-2 fw-bold text-light">
            <span className="currency-symbol me-1" style={{ color: "#FF9431" }}>N$</span>
            <span id="smartpcModalAmount">{amount.toFixed(2)}</span>
          </div>
        </div>

        <p className="text-light small mb-3">
          Are you sure you want to cash out <strong style={{ color: "#FF9431" }}>{formatCurrency(amount)}</strong>?
        </p>

        {/* Action Buttons: Confirm & Cancel */}
        <div className="d-flex flex-column gap-2 mt-2">
          <Button variant="success" onClick={onConfirm} icon="fa-solid fa-circle-check">
            Confirm Cash Out
          </Button>
          <Button variant="danger" onClick={onClose} icon="fa-solid fa-circle-xmark">
            Cancel
          </Button>
        </div>

        <p className="text-dim small mt-3 mb-0" style={{ fontSize: "0.76rem" }}>
          <i className="fa-solid fa-info-circle me-1" style={{ color: "#FF9431" }}></i>
          Cashier will approve and redeem your balance at the counter.
        </p>
      </div>
    </Modal>
  );
};
