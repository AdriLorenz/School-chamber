using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

public class QuestionManager : MonoBehaviour
{
    [Header("Question Settings")]
    [SerializeField] GameObject question;
    [SerializeField] Text QuestionText;
    [SerializeField] Text AnswerText1;
    [SerializeField] Text AnswerText2;
    [SerializeField] Text AnswerText3;


    [Header("Question 1 Settings")]
    
    public string question_1;
    public string answerBlue_1;
    [SerializeField] GameObject AnswerBlue1_Object;
    public string answerGreen_1;
    [SerializeField] GameObject AnswerGreen1_Object;
    public string answerRed_1;
    [SerializeField] GameObject AnswerRed1_Object;

    [Header("Question 2 Settings")]
    public string question_2;
    public string answerBlue_2;
    [SerializeField] GameObject AnswerBlue2_Object;
    public string answerGreen_2;
    [SerializeField] GameObject AnswerGreen2_Object;
    public string answerRed_2;
    [SerializeField] GameObject AnswerRed2_Object;

    [Header("Question 3 Settings")]
    public string question_3;
    public string answerBlue_3;
    [SerializeField] GameObject AnswerBlue3_Object;
    public string answerGreen_3;
    [SerializeField] GameObject AnswerGreen3_Object;
    public string answerRed_3;
    [SerializeField] GameObject AnswerRed3_Object;

    [Header("Question 3 Settings")]
    [SerializeField] GameObject EndingScreen;
    

    public UnityEvent SnapZone;
    public UnityEvent Exit;

    private int QuestionIndex = 0;

    void Awake() {

    }
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnEnable() {
        QuestionIndex++;

        if (QuestionIndex == 1) {
            QuestionText.text = question_1;
            AnswerText1.text = answerBlue_1;
            AnswerText2.text = answerGreen_1;
            AnswerText3.text = answerRed_1;

            question.SetActive(true);
            Debug.Log("Llego a la pregunta 1");
            spawn1();
            SnapZone.Invoke();
            
        } else if (QuestionIndex == 2) {
            QuestionText.text = question_2;
            AnswerText1.text = answerBlue_2;
            AnswerText2.text = answerGreen_2;
            AnswerText3.text = answerRed_2;

            question.SetActive(true);
            Debug.Log("Llego a la pregunta 2");
            spawn2();
            SnapZone.Invoke();

        } else if (QuestionIndex == 3) {
            QuestionText.text = question_3;
            AnswerText1.text = answerBlue_3;
            AnswerText2.text = answerGreen_3;
            AnswerText3.text = answerRed_3;

            question.SetActive(true);
            Debug.Log("Llego a la pregunta 3");
            spawn3();
            SnapZone.Invoke();

        } else {
            Debug.Log("Final screen 1");

            question.SetActive(false);
            EndingScreen.SetActive(true);
            Exit.Invoke();            
        }
    }

    public void spawn1() {
        AnswerBlue1_Object.gameObject.SetActive(true);
        AnswerGreen1_Object.gameObject.SetActive(true);
        AnswerRed1_Object.gameObject.SetActive(true);
    }
    public void spawn2() {
        AnswerBlue2_Object.gameObject.SetActive(true);
        AnswerGreen2_Object.gameObject.SetActive(true);
        AnswerRed2_Object.gameObject.SetActive(true);
    }

    public void spawn3() {
        AnswerBlue3_Object.gameObject.SetActive(true);
        AnswerGreen3_Object.gameObject.SetActive(true);
        AnswerRed3_Object.gameObject.SetActive(true);
    }
}
