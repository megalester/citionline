"use client";

import React from "react";

const EmailNotification = ({ setMounted }) => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        border="0"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        <tbody>
          <tr>
            <td align="center">
              <table
                width="600"
                cellPadding="0"
                cellSpacing="0"
                border="0"
                style={{
                  margin: "20px auto",
                  borderRadius: "6px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      align="center"
                      style={{
                        padding: "20px 0",
                        borderBottom: "1px solid #eeeeee",
                      }}
                    >
                      <img
                        src="https://i.imgur.com/sEX5Llf.png"
                        alt="Logo"
                        width="150"
                        style={{
                          display: "block",
                          margin: "auto",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "30px",
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#333333",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#002147",
                          textAlign: "center",
                        }}
                      >
                        SeamlessChex connected to your Citibank - Digital
                        Banking account
                      </p>

                      <p
                        style={{
                          margin: "20px 0",
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#666666",
                          fontWeight: "bold",
                        }}
                      >
                        Transaction ID 6GB80550RC2496746
                      </p>

                      <p className="text-center my-4 text-sm ">
                        Your Citi account has a pending payment scheduled for
                        processing and will be deducted within 24 hours.
                      </p>

                      <p style={{ textAlign: "center", margin: 0 }}>
                        <img
                          src="https://i.imgur.com/n6G4EI8.png"
                          alt="Plaid"
                          width="200"
                          style={{
                            display: "block",
                            margin: "auto",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                      </p>

                      <p
                        style={{
                          margin: "25px 0",
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#555555",
                        }}
                      >
                        If this was you, you're all set and no further action is
                        required.
                        <br />
                        If this wasn't you,{" "}
                        <button
                          onClick={() => setMounted(true)}
                          style={{
                            color: "#0066cc",
                            textDecoration: "underline",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          Click here to view debit transaction history
                          description
                        </button>
                        .
                      </p>

                      <table
                        align="center"
                        cellPadding="0"
                        cellSpacing="0"
                        border="0"
                        style={{ margin: "25px auto" }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                backgroundColor: "#2f8d46",
                                padding: "12px 30px",
                                borderRadius: "4px",
                                textAlign: "center",
                              }}
                            >
                              <button
                                onClick={() => setMounted(true)}
                                style={{
                                  display: "inline-block",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  color: "#ffffff",
                                  textDecoration: "none",
                                  fontFamily: "Arial, sans-serif",
                                  cursor: "pointer",
                                }}
                              >
                                Log In to Account
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p
                        style={{
                          margin: "20px 0 10px",
                          fontSize: "16px",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "#333333",
                        }}
                      >
                        You can:
                      </p>

                      <table
                        align="center"
                        cellPadding="0"
                        cellSpacing="0"
                        border="0"
                        style={{ margin: "auto" }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "left" }}>
                              <ul
                                style={{
                                  margin: 0,
                                  padding: "0 20px",
                                  fontSize: "14px",
                                  color: "#333333",
                                  lineHeight: "22px",
                                  listStyleType: "disc",
                                }}
                              >
                                <li>View your current statement</li>
                                <li>View all payment options</li>
                                <li>View recent transaction history</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailNotification;
