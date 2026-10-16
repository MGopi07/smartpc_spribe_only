import React from "react";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";

interface ZeroBalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  shopName?: string;
  machineName?: string;
}

export const ZeroBalanceModal: React.FC<ZeroBalanceModalProps> = ({
  isOpen,
  onClose,
  shopName: _shopName,
  machineName: _machineName = "Smart PC",
}) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="410px">
      <div className="modal-body p-4 text-center">
        {/* Step Pill */}
        <div className="step-pill-box justify-content-center mb-3">
          <span className="pill-text fw-bold" style={{ color: "#FF9431" }}>
            <i className="fa-solid fa-coins me-1"></i> Station Balance Alert
          </span>
        </div>

        {/* 3D Glowing Animated Coin Icon */}
        <div className="d-flex justify-content-center mb-3">
          <div
            style={{
              width: "78px",
              height: "78px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 30%, #FF9431 0%, #F5831F 60%, #7A3300 100%)",
              border: "2.5px solid #FFAE66",
              boxShadow: "0 0 35px rgba(245, 131, 31, 0.75), inset 0 2px 6px rgba(255, 255, 255, 0.7)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "2.1rem",
              animation: "pulseAmberGlow 2.5s infinite alternate ease-in-out",
            }}
          >
            <i className="fa-solid fa-hand-holding-dollar"></i>
          </div>
        </div>

        {/* Inner Zero Balance Panel */}
        <div
          className="p-3 rounded-3 mb-3 text-center"
          style={{
            background: "radial-gradient(circle at 50% 0%, #190F09 0%, #140D08 50%, #0C0805 100%)",
            border: "1.5px solid rgba(245, 131, 31, 0.5)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(245, 131, 31, 0.15)",
          }}
        >
          <p className="text-secondary small text-uppercase mb-1" style={{ fontSize: "0.74rem", letterSpacing: "0.5px" }}>
            Current Balance
          </p>
          <div className="fs-2 fw-bold text-light mb-2">
            <span className="currency-symbol me-1" style={{ color: "#FF9431" }}>N$</span>
            <span>0.00</span>
          </div>

          <div
            className="p-2 rounded-2 text-start small mb-1"
            style={{ background: "rgba(245, 131, 31, 0.12)", border: "1px solid rgba(245, 131, 31, 0.3)" }}
          >
            <div className="d-flex align-items-start gap-2 text-light" style={{ fontSize: "0.82rem" }}>
              <i className="fa-solid fa-cash-register mt-1" style={{ color: "#FF9431" }}></i>
              <div>
                <span>Please visit the </span>
                <strong style={{ color: "#FF9431" }}>Cashier Desk</strong>
                <span> to load coins </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-dim small mb-3" style={{ fontSize: "0.78rem" }}>
          Once coins are loaded by the cashier, your balance will update instantly.
        </p>

        {/* Action Button */}
        <div className="d-flex flex-column gap-2">
          <Button variant="gold" onClick={onClose} className="btn-theme-orange-solid w-100 py-2 fw-bold text-white">
            <i className="fa-solid fa-circle-check me-1"></i> Understood, Visit Cashier
          </Button>
        </div>
      </div>
    </Modal>
  );
};
